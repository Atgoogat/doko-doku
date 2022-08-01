import { Injectable } from '@angular/core'
import { Player } from '../model/player'

interface PlayerDivision {
  takePart: Player[]
  skipped: Player[]
}

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  constructor() {}

  playersForRound(players: Player[], round: number): Player[] {
    return this.dividePlayers(players, round).takePart
  }

  skippedPlayers(players: Player[], round: number): Player[] {
    return this.dividePlayers(players, round).skipped
  }

  private dividePlayers(players: Player[], round: number): PlayerDivision {
    const playerCount = players.length
    if (playerCount === 4) {
      return {
        takePart: players,
        skipped: [],
      }
    }
    const stride = playerCount / (playerCount - 4)
    let skipped: Player[] = []
    for (let i = players.length - 1; i >= 0; i -= stride) {
      skipped.push(players[(i + round - 1) % players.length])
    }
    return {
      takePart: players.filter((p) => !skipped.includes(p)),
      skipped: skipped.reverse(),
    }
  }
}
