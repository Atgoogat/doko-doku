import { Identifiable } from './identifiable'
import { Player } from './player'

export interface Game extends Identifiable {
  readonly players: Player[]
  readonly createdOn: string | Date
}

export interface GameEntry extends Identifiable {
  readonly gameId: number
  readonly round: number
  readonly isBockRound: boolean
  readonly playerPoints: GameEntryPlayerPoints[]
}

export interface GameEntryPlayerPoints extends Identifiable {
  readonly playerId: number
  readonly points: number
}
