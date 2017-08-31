import { async, TestBed } from '@angular/core/testing'
import { FormsModule } from '@angular/forms'
import { By } from '@angular/platform-browser'
import { RouterTestingModule } from '@angular/router/testing'

import { AppComponent } from './app.component'
import { HeroDetailComponent } from './hero-detail/hero-detail.component'

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
      ]
    }).compileComponents()

    fixture = TestBed.createComponent(AppComponent)
    app = fixture.debugElement.componentInstance
    compiled = fixture.debugElement.nativeElement

    fixture.detectChanges()
  }))

  it('should create the app', async(() => {
    expect(app).toBeTruthy()
  }))

  it(`should have as title 'Tour of Heroes'`, async(() => {
    expect(app.title).toEqual('Tour of Heroes')
  }))

  it('should render title in a h1 tag', async(() => {
    expect(compiled.querySelector('h1').textContent)
      .toContain('Tour of Heroes')
  }))

  it(`should render 'My heroes' in a h2 tag`, async(() => {
    expect(compiled.querySelector('h2.my-heroes').textContent)
      .toContain('My Heroes')
  }))

  it('should render heroes in span.badge', async(() => {
    expect(compiled.querySelectorAll('span.badge').length)
      .toBe(10)
  }))

  it('should render 11 Mr. Nice in ul>li:first-child', async(() => {
    expect(compiled.querySelector('ul>li:first-child').textContent.trim())
      .toBe('11 Mr. Nice')
  }))

  it('should render 11 Mr. Nice in ul>li:last-child', async(() => {
    expect(compiled.querySelector('ul>li:last-child').textContent.trim())
      .toBe('20 Tornado')
  }))

  it('should bind selectedHero to HeroDetailComponent', async(() => {

    // arrange & act
    app.selectedHero = { id: 12, name: 'Narco' }
    fixture.detectChanges()

    // assert
    expect(
      fixture
        .debugElement
        .query(By.css('app-hero-detail'))
        .componentInstance.hero
    ).toBe(app.selectedHero)

  }))
})
