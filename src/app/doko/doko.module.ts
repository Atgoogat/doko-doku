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
import { GameTableComponent } from './game-table/game-table.component'

@NgModule({
  declarations: [NewGameComponent, GameTableComponent],
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
  ],
})
export class DokoModule {}