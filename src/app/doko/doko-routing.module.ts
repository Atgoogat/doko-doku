import { NewGameComponent } from './new-game/new-game.component'
import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'

const routes: Routes = [
  {
    path: 'new',
    component: NewGameComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DokoRoutingModule {}
