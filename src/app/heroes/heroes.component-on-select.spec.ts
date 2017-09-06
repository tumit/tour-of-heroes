import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { FormsModule } from '@angular/forms'
import { RouterTestingModule } from '@angular/router/testing'

import { HeroDetailComponent } from '../hero-detail/hero-detail.component'
import { HeroService } from '../service/hero.service'
import { HEROES } from '../service/mock-heroes'
import { HeroesComponent } from './heroes.component'

describe('HeroesComponent', () => {
  let component: HeroesComponent
  let fixture: ComponentFixture<HeroesComponent>
  let compiled: any

  const selectedHero = HEROES[1]

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule
      ],
      declarations: [
        HeroesComponent,
        HeroDetailComponent
      ],
      providers: [
        HeroService
      ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent)
    component = fixture.componentInstance
    compiled = fixture.debugElement.nativeElement
    fixture.detectChanges()
  })

  it('should set selectedHero after onSelect(hero)', async(() => {
    // arrange
    spyOn(component, 'onSelect')

    // act
    compiled.querySelector('ul>li:nth-child(2)').click()
    fixture.detectChanges()

    // assert
    expect(component.onSelect).toHaveBeenCalledWith(selectedHero)
  }))
})
