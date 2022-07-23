import { ID_STORAGE } from './../app.constants'
import { Inject, Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class IdService {
  private id!: number

  constructor(@Inject(ID_STORAGE) private readonly storage: Storage) {
    const valueString = storage.getItem('id')
    if (valueString === null) {
      storage.setItem('id', '0')
      this.id = 0
    } else {
      const value = parseInt(valueString)
      if (value === NaN) {
        throw new Error(
          'expected an integer but got ' + value + ' from storage'
        )
      }
      this.id = value
    }
  }

  getUniqueId(): number {
    const newId = this.id
    this.id += 1
    this.storage.setItem('id', `${this.id}`)
    return newId
  }
}
