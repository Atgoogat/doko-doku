import { Observable } from 'rxjs'
import { DokoGameState } from './../../state/doko-game.state'
import { Component, OnInit } from '@angular/core'
import { Select } from '@ngxs/store'
import { Game } from 'src/app/model/game'

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.sass'],
})
export class GameListComponent implements OnInit {
  @Select(DokoGameState.games)
  games$!: Observable<Game[]>

  constructor() {}

  ngOnInit(): void {}
}
