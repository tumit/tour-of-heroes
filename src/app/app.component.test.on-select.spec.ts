import { async, TestBed } from '@angular/core/testing'
import { FormsModule } from '@angular/forms'
import { RouterTestingModule } from '@angular/router/testing'

import { AppComponent } from './app.component'
import { HeroDetailComponent } from './hero-detail/hero-detail.component'
import { Hero } from './model/hero'
import { HeroService } from './service/hero.service'

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
        AppComponent,
        HeroDetailComponent
      ],
      providers: [
        HeroService
      ]
    }).compileComponents()

    fixture = TestBed.createComponent(AppComponent)
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
