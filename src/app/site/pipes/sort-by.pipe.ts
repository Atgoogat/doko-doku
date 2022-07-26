import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'sortBy',
})
export class SortByPipe implements PipeTransform {
  transform<A, K extends keyof A>(array: A[] | null, sortKey: K): A[] | null {
    if (array === null) {
      return null
    }

    const copyA = [...array]
    copyA.sort((a, b) => {
      if (a[sortKey] < b[sortKey]) {
        return -1
      } else if (a[sortKey] > b[sortKey]) {
        return 1
      }
      return 0
    })
    return copyA
  }
}
