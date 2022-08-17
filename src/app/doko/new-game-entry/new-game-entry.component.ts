import { Component, OnDestroy, OnInit } from '@angular/core'
import { NonNullableFormBuilder, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { Store } from '@ngxs/store'
import { map, of, Subject, switchMap, takeUntil, throwError } from 'rxjs'
import { Game } from 'src/app/model/game'
import { DokoGameState, parseGameId } from 'src/app/state/doko-game.state'

@Component({
  selector: 'app-new-game-entry',
  templateUrl: './new-game-entry.component.html',
  styleUrls: ['./new-game-entry.component.sass'],
})
export class NewGameEntryComponent implements OnInit, OnDestroy {
  game?: Game

  private readonly onDestroy$ = new Subject<void>()

  formGroup = this.formBuilder.group({
    isBockRound: [false, Validators.required],
    winnerPlayerIds: null,
  })

  constructor(
    private readonly formBuilder: NonNullableFormBuilder,
    private readonly router: Router,
    private readonly activatedRouter: ActivatedRoute,
    private readonly store: Store
  ) {}

  ngOnInit(): void {
    const id$ = this.activatedRouter.paramMap.pipe(
      map((pm) => pm.get('id')),
      map((id) => parseGameId(id))
    )

    id$
      .pipe(
        switchMap((id) => this.store.select(DokoGameState.game(id))),
        switchMap((game) => {
          if (game === undefined) {
            return throwError(() => new Error('no game found'))
          }
          return of(game)
        }),
        takeUntil(this.onDestroy$)
      )
      .subscribe({
        next: (game) => (this.game = game),
        error: (err) => {
          console.error(err)
          this.router.navigate(['/', 'doko', 'not-found'])
        },
      })
  }

  ngOnDestroy(): void {
    this.onDestroy$.next()
    this.onDestroy$.complete()
  }
}
