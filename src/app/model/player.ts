import { Identifiable } from './identifiable'
export interface Player extends Identifiable {
  readonly name: string
  readonly startNumber: number
}
