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
    compiled.querySelector('ul>li:nth-child(2)').click()
    fixture.detectChanges()

  }))

  it(`should have a selected hero after onSelect(hero)`, async(() => {
    expect(app.selectedHero).toEqual({
      id: 12,
      name: 'Narco'
    })
  }))

  it('should render hero details in a h2.selected-hero-details', async(() => {
    expect(compiled.querySelector('h2.selected-hero-details').textContent)
      .toContain('Narco details!')
  }))

  it('should render hero id in a span.selected-hero-id', async(() => {
    expect(
      compiled.querySelector('span.selected-hero-id').textContent
    ).toContain('12')
  }))

  it('should render hero name in a input.selected-hero-name', async(() => {
    expect(
      compiled.querySelector('input.selected-hero-name').value
    ).toBe('Narco')
  }))

  it('should make selected on 12 Narco after click', async(() => {
    expect(
      compiled
        .querySelector('ul>li.selected')
        .textContent
        .trim()
    ).toBe('12 Narco')
  }))
})
