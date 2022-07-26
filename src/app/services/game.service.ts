import { NewGame, Game } from './../model/game'
import { IdService } from './id.service'
import { Injectable } from '@angular/core'
import { Player } from '../model/player'

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor(private readonly idService: IdService) {}

  createNewGame(newGame: NewGame): Game {
    const players = newGame.playerNames.map((pn, index) => {
      return <Player>{
        id: this.idService.getUniqueId(),
        name: pn,
        startNumber: index,
      }
    })

    return {
      id: this.idService.getUniqueId(),
      createdOn: new Date().toISOString(),
      players,
    }
  }
}
