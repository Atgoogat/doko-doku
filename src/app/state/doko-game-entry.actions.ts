import { NewGameEntry } from '../model/game'

export class AddGameEntry {
  static readonly type = '[DokoGameEntry] add entry'
  constructor(public readonly newGameEntry: NewGameEntry) {}
}
