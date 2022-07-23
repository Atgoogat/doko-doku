import { Injectable } from '@angular/core'
import { State } from '@ngxs/store'

export interface DokoGameStateModel {}

const defaultModel: DokoGameStateModel = {}

@State<DokoGameStateModel>({
  name: 'dokoGame',
  defaults: defaultModel,
})
@Injectable()
export class DokoGameState {}
