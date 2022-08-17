import { GameListComponent } from './game-list/game-list.component'
import { GameTableComponent } from './game-table/game-table.component'
import { NewGameComponent } from './new-game/new-game.component'
import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'
import { NewGameEntryComponent } from './new-game-entry/new-game-entry.component'
import { NotFoundComponent } from './not-found/not-found.component'

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
        children: [
          {
            path: '',
            component: GameTableComponent,
          },
          {
            path: 'entry',
            component: NewGameEntryComponent,
          },
        ],
      },
    ],
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: 'not-found',
    pathMatch: 'full',
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DokoRoutingModule {}
