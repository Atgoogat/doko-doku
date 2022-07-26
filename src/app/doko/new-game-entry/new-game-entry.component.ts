import { Component, OnInit } from '@angular/core'
import { NonNullableFormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-new-game-entry',
  templateUrl: './new-game-entry.component.html',
  styleUrls: ['./new-game-entry.component.sass'],
})
export class NewGameEntryComponent implements OnInit {
  formGroup = this.formBuilder.group({
    isBockRound: [false, Validators.required],
    winnerPlayerIds: null,
  })

  constructor(private readonly formBuilder: NonNullableFormBuilder) {}

  ngOnInit(): void {}
}
