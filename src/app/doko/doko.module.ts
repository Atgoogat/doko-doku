import { MatListModule } from '@angular/material/list'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import { SiteModule } from './../site/site.module'
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { DokoRoutingModule } from './doko-routing.module'
import { NewGameComponent } from './new-game/new-game.component'
import { MatButtonModule } from '@angular/material/button'
import { MatTableModule } from '@angular/material/table'
import { MatCardModule } from '@angular/material/card'
import { GameTableComponent } from './game-table/game-table.component'
import { NewGameEntryComponent } from './new-game-entry/new-game-entry.component'
import { GameListComponent } from './game-list/game-list.component'
import { GameCardComponent } from './game-list/game-card/game-card.component'
import { NotFoundComponent } from './not-found/not-found.component'

@NgModule({
  declarations: [
    NewGameComponent,
    GameTableComponent,
    NewGameEntryComponent,
    GameListComponent,
    GameCardComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DokoRoutingModule,
    SiteModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatListModule,
    MatCardModule,
  ],
})
export class DokoModule {}
