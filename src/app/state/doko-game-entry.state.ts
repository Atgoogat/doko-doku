import { Injectable } from '@angular/core'
import { Action, createSelector, State, StateContext } from '@ngxs/store'
import { GameEntry, GameEntryPlayerPoints, NewGameEntry } from '../model/game'
import { IdService } from '../services/id.service'
import { AddGameEntry } from './doko-game-entry.actions'

export interface DokoGameEntryStateModel {
  [gameId: number]: GameEntry[]
}

const defaults: DokoGameEntryStateModel = {}

@Injectable()
@State<DokoGameEntryStateModel>({
  name: 'dokoGameEntries',
  defaults,
})
export class DokoGameEntryState {
  static gameEntries(gameId: number) {
    return createSelector(
      [DokoGameEntryState],
      (state: DokoGameEntryStateModel) => {
        return state[gameId] ?? []
      }
    )
  }

  static roundsPlayed(gameId: number) {
    return createSelector(
      [DokoGameEntryState.gameEntries(gameId)],
      (entries: GameEntry[]) => entries.length
    )
  }

  @Action(AddGameEntry)
  addNewGameEntry(
    ctx: StateContext<DokoGameEntryStateModel>,
    action: AddGameEntry
  ) {
    const entries = ctx.getState()[action.newGameEntry.gameId] ?? []

    const newEntry: GameEntry = {
      gameId: action.newGameEntry.gameId,
      id: this.idService.getUniqueId(),
      isBockRound: action.newGameEntry.isBockRound,
      round: entries.length + 1,
      playerPoints: this.playerPoints(action.newGameEntry),
    }

    let newStateSlice: DokoGameEntryStateModel = {}
    newStateSlice[newEntry.gameId] = entries

    ctx.patchState(newStateSlice)
  }

  private playerPoints(newGameEntry: NewGameEntry): GameEntryPlayerPoints[] {
    const winners: GameEntryPlayerPoints[] = newGameEntry.winnerPlayerIds.map(
      (wId) => ({
        playerId: wId,
        id: this.idService.getUniqueId(),
        points: newGameEntry.pointsPerWinner,
      })
    )
    const losers: GameEntryPlayerPoints[] = newGameEntry.loserPlayerIds.map(
      (lId) => ({
        id: this.idService.getUniqueId(),
        playerId: lId,
        points:
          (newGameEntry.pointsPerWinner * newGameEntry.winnerPlayerIds.length) /
          newGameEntry.loserPlayerIds.length,
      })
    )
    return [...winners, ...losers]
  }

  constructor(private readonly idService: IdService) {}
}
