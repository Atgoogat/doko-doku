import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { DokoRoutingModule } from './doko-routing.module'
import { NewGameComponent } from './new-game/new-game.component'

@NgModule({
  declarations: [NewGameComponent],
  imports: [CommonModule, ReactiveFormsModule, DokoRoutingModule],
})
export class DokoModule {}
