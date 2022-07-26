import { Game } from './../../../model/game'
import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.sass'],
})
export class GameCardComponent implements OnInit {
  @Input() game!: Game

  constructor() {}

  ngOnInit(): void {}

  get playerNames() {
    const names = this.game.players.map((p) => p.name)
    return names.join(', ')
  }
}
