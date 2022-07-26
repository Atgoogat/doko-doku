import { Game, GameEntry } from './../../model/game'
import { Component, OnInit } from '@angular/core'
import { of } from 'rxjs'

@Component({
  selector: 'app-game-table',
  templateUrl: './game-table.component.html',
  styleUrls: ['./game-table.component.sass'],
})
export class GameTableComponent implements OnInit {
  game: Game = {
    players: [
      ...['Franka', 'Luis', 'Onno', 'Jana'].map((name, id) => ({
        id,
        name,
        startNumber: id,
      })),
    ],
    createdOn: new Date(),
    id: 1609,
  }

  entries: GameEntry[] = [
    {
      id: 16,
      gameId: 1609,
      isBockRound: false,
      round: 1,
      playerPoints: [
        {
          id: 20,
          playerId: 0,
          points: 1,
        },
        {
          id: 21,
          playerId: 1,
          points: 1,
        },
        {
          id: 22,
          playerId: 2,
          points: -1,
        },
        {
          id: 23,
          playerId: 3,
          points: -1,
        },
      ],
    },
  ]

  columns$ = of(['position', ...this.game.players.map((p) => `${p.id}`)])
  player$ = of(this.game.players)

  constructor() {}

  ngOnInit(): void {}

  findPlayerPointsForEntries(gameEntry: GameEntry, playerId: number) {
    const fp = gameEntry.playerPoints.find((pp) => pp.playerId === playerId)
    if (fp === undefined) {
      throw new Error(`game entry for playerid ${playerId} not found`)
    }
    return fp
  }
}
