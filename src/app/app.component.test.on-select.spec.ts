import { async, TestBed } from '@angular/core/testing'
import { FormsModule } from '@angular/forms'
import { RouterTestingModule } from '@angular/router/testing'

import { AppComponent, Hero } from './app.component'

describe('AppComponent', () => {

  let fixture: any
  let compiled: any
  let app: AppComponent

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents()

    fixture = TestBed.createComponent(AppComponent)
    fixture.detectChanges()

    app = fixture.debugElement.componentInstance

    compiled = fixture.debugElement.nativeElement
    fixture.detectChanges()
  }))

  it(`should have a selected hero after onSelect(hero)`, async(() => {

    // arrange
    const selectedHero: Hero = app.heroes[1]
    spyOn(app, 'onSelect')

    // act
    compiled.querySelector('ul>li:nth-child(2)').click()
    fixture.detectChanges()

    // assert
    expect(app.onSelect)
      .toHaveBeenCalledWith(selectedHero)
  }))


})
