import { analyzeNgModules } from '@angular/compiler'
import { TestBed, async } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'

import { AppComponent, Hero } from './app.component'
import { FormsModule } from '@angular/forms'
import { tick } from '@angular/core/testing'
import { fakeAsync } from '@angular/core/testing'

describe('AppComponent', () => {

  let fixture: any
  let compiled: any
  let app: AppComponent
  const selectedHero: Hero = {
    id: 1, name: 'Windstorm'
  }

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

    compiled = fixture.debugElement.nativeElement

    app = fixture.debugElement.componentInstance
    app.onSelect(selectedHero)

    fixture.detectChanges()
  }))

  it(`should have a selected hero after onSelect(hero)`, async(() => {
    expect(app.selectedHero).toEqual({
      id: 1,
      name: 'Windstorm'
    })
  }))

  it('should render hero details in a h2.selected-hero-details', fakeAsync(() => {
    tick()
    expect(compiled.querySelector('h2.selected-hero-details').textContent)
      .toContain('Windstorm details!')
  }))

  it('should render hero id in a span.selected-hero-id', fakeAsync(() => {
    tick()
    expect(
      compiled.querySelector('span.selected-hero-id').textContent
    ).toContain('1')
  }))

  it('should render hero name in a input.selected-hero-name', fakeAsync(() => {
    tick()
    expect(
      compiled.querySelector('input.selected-hero-name').value
    ).toBe('Windstorm')
  }))
})
