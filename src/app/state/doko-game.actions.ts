import { NewGame } from './../model/game'
export class AddNewGame {
  static type = '[Game] add new'
  constructor(public readonly newGame: NewGame) {}
}
