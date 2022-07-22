import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class IdService {
  constructor() {
    if (localStorage.getItem('id') === null) {
      localStorage.setItem('id', '0')
    }
  }

  getUniqueId(): number {
    const id = localStorage.getItem('id')
    if (id === null) {
      throw new Error('localStorage was expected to hold an id')
    }
    const numericId = parseInt(id)
    if (numericId === NaN) {
      throw new Error('expected an int but got "' + numericId + '"')
    }
    return numericId
  }
}
