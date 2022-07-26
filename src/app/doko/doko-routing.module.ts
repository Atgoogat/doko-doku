import { GameListComponent } from './game-list/game-list.component'
import { GameTableComponent } from './game-table/game-table.component'
import { NewGameComponent } from './new-game/new-game.component'
import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'

const routes: Routes = [
  {
    path: 'new',
    component: NewGameComponent,
  },
  {
    path: 'game',
    children: [
      {
        path: '',
        component: GameListComponent,
      },
      {
        path: ':id',
        component: GameTableComponent,
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DokoRoutingModule {}
