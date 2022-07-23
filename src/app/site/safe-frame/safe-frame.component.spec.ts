import { ComponentFixture, TestBed } from '@angular/core/testing'

import { SafeFrameComponent } from './safe-frame.component'

describe('SafeFrameComponent', () => {
  let component: SafeFrameComponent
  let fixture: ComponentFixture<SafeFrameComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SafeFrameComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(SafeFrameComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
