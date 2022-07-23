import { Component, OnInit } from '@angular/core'
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms'

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.sass'],
})
export class NewGameComponent implements OnInit {
  formGroup = new FormGroup({
    playerNames: new FormArray([
      this.getPlayerNameFormControl(),
      this.getPlayerNameFormControl(),
      this.getPlayerNameFormControl(),
      this.getPlayerNameFormControl(),
    ]),
  })

  constructor() {}

  ngOnInit(): void {}

  addPlayer() {
    this.formGroup.controls['playerNames'].push(this.getPlayerNameFormControl())
  }

  removePlayerAt(index: number) {
    this.formGroup.controls['playerNames'].removeAt(index)
  }

  createGame() {
    console.log(this.formGroup.getRawValue())
  }

  private getPlayerNameFormControl() {
    const playerControl = new FormControl('', { nonNullable: true })
    playerControl.addValidators([Validators.required, Validators.minLength(1)])
    return playerControl
  }
}
