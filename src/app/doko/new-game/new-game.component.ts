import { ChangeDetectorRef, Component, OnInit } from '@angular/core'
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms'
import { Store } from '@ngxs/store'
import { NewGame } from './../../model/game'
import { AddNewGame } from './../../state/doko-game.actions'

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

  constructor(
    private readonly changeRef: ChangeDetectorRef,
    private readonly store: Store
  ) {}

  ngOnInit(): void {}

  addPlayer() {
    this.formGroup.controls['playerNames'].push(this.getPlayerNameFormControl())
    this.changeRef.detectChanges()
  }

  removePlayerAt(index: number) {
    this.formGroup.controls['playerNames'].removeAt(index)
    this.changeRef.detectChanges()
  }

  createGame() {
    if (this.formGroup.valid) {
      const newGame: NewGame = this.formGroup.getRawValue()
      this.store.dispatch(new AddNewGame(newGame))
    }
  }

  private getPlayerNameFormControl() {
    const playerControl = new FormControl('', { nonNullable: true })
    playerControl.addValidators([Validators.required, Validators.minLength(1)])
    return playerControl
  }
}
