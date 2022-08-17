import { GameService } from './../services/game.service'
import { AddNewGame } from './doko-game.actions'
import { Game } from './../model/game'
import { Injectable } from '@angular/core'
import {
  Action,
  createSelector,
  Selector,
  State,
  StateContext,
} from '@ngxs/store'

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

  @Selector()
  static games({ games }: DokoGameStateModel) {
    return games
  }

  static game(id: number) {
    return createSelector([DokoGameState.games], (games: Game[]) =>
      games.find((g) => g.id === id)
    )
  }

  @Action(AddNewGame)
  addNewGame(ctx: StateContext<DokoGameStateModel>, action: AddNewGame) {
    const { games } = ctx.getState()
    const newGame = this.gameService.createNewGame(action.newGame)
    ctx.patchState({ games: [...games, newGame] })
  }
}

export const parseGameId = (id: string | null | undefined) => {
  if (id === null || id === undefined) {
    throw new Error('id must not be null or undefined')
  }
  const intId = parseInt(id)
  if (intId === NaN) {
    throw new Error('expected an integer')
  }
  return intId
}
