import { GameService } from './../services/game.service'
import { AddNewGame } from './doko-game.actions'
import { Game } from './../model/game'
import { Injectable } from '@angular/core'
import { Action, State, StateContext } from '@ngxs/store'

export interface DokoGameStateModel {
  games: Game[]
}

const defaultModel: DokoGameStateModel = {
  games: [],
}

@State<DokoGameStateModel>({
  name: 'dokoGame',
  defaults: defaultModel,
})
@Injectable()
export class DokoGameState {
  constructor(private readonly gameService: GameService) {}

  @Action(AddNewGame)
  addNewGame(ctx: StateContext<DokoGameStateModel>, action: AddNewGame) {
    const { games } = ctx.getState()
    const newGame = this.gameService.createNewGame(action.newGame)
    ctx.patchState({ games: [...games, newGame] })
  }
}
