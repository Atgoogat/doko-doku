import { ComponentFixture, TestBed } from '@angular/core/testing'

import { NewGameEntryComponent } from './new-game-entry.component'

describe('NewGameEntryComponent', () => {
  let component: NewGameEntryComponent
  let fixture: ComponentFixture<NewGameEntryComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewGameEntryComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(NewGameEntryComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
