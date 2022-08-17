import { Component, OnDestroy, OnInit } from '@angular/core'
import { NonNullableFormBuilder, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { Store } from '@ngxs/store'
import {
  map,
  Observable,
  of,
  Subject,
  switchMap,
  takeUntil,
  throwError,
  withLatestFrom,
} from 'rxjs'
import { Game } from 'src/app/model/game'
import { GameService } from 'src/app/services/game.service'
import { PlayerDivision, PlayerService } from 'src/app/services/player.service'
import { DokoGameEntryState } from 'src/app/state/doko-game-entry.state'
import { DokoGameState, parseGameId } from 'src/app/state/doko-game.state'

@Component({
  selector: 'app-new-game-entry',
  templateUrl: './new-game-entry.component.html',
  styleUrls: ['./new-game-entry.component.sass'],
})
export class NewGameEntryComponent implements OnInit, OnDestroy {
  game?: Game
  players$!: Observable<PlayerDivision>

  private readonly onDestroy$ = new Subject<void>()

  formGroup = this.formBuilder.group({
    isBockRound: [false, Validators.required],
    winnerPlayerIds: null,
  })

  constructor(
    private readonly formBuilder: NonNullableFormBuilder,
    private readonly router: Router,
    private readonly activatedRouter: ActivatedRoute,
    private readonly store: Store,
    private readonly playerService: PlayerService
  ) {}

  ngOnInit(): void {
    const id$ = this.activatedRouter.paramMap.pipe(
      map((pm) => pm.get('id')),
      map((id) => parseGameId(id))
    )

    const game$ = id$.pipe(
      switchMap((id) => this.store.select(DokoGameState.game(id))),
      switchMap((game) => {
        if (game === undefined) {
          return throwError(() => new Error('no game found'))
        }
        return of(game)
      })
    )

    game$.pipe(takeUntil(this.onDestroy$)).subscribe({
      next: (game) => (this.game = game),
      error: (err) => {
        console.error(err)
        this.router.navigate(['/', 'doko', 'not-found'])
      },
    })

    this.players$ = game$.pipe(
      switchMap((game) => {
        return this.store.select(DokoGameEntryState.roundsPlayed(game.id)).pipe(
          map((roundsPlayed) => ({
            game,
            roundsPlayed,
          }))
        )
      }),
      map((gr) =>
        this.playerService.dividePlayers(gr.game.players, gr.roundsPlayed + 1)
      )
    )
  }

  ngOnDestroy(): void {
    this.onDestroy$.next()
    this.onDestroy$.complete()
  }
}
