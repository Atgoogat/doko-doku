import { Directive, HostBinding } from '@angular/core'

@Directive({
  selector: '[appGlobalFab]',
})
export class GlobalFabDirective {
  @HostBinding('class')
  classes = 'doko-global-fab'

  constructor() {}
}
