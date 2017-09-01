import { HeroService } from './service/hero.service'
import { async, TestBed } from '@angular/core/testing'
import { ComponentFixture } from '@angular/core/testing/src/testing'
import { FormsModule } from '@angular/forms'
import { RouterTestingModule } from '@angular/router/testing'

import { AppComponent } from './app.component'
import { HeroDetailComponent } from './hero-detail/hero-detail.component'

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>
  let compiled: any

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
    compiled = fixture.debugElement.nativeElement
    fixture.detectChanges()
  }))

  it('should make selected on 12 Narco after click', async(() => {

    compiled.querySelector('ul>li:nth-child(2)').click()
    fixture.detectChanges()

    expect(
      compiled
        .querySelector('ul>li.selected')
        .textContent
        .trim()
    ).toBe('12 Narco')
  }))
})
