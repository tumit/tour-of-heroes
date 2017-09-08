import { NO_ERRORS_SCHEMA } from '@angular/core'
import { async, TestBed, ComponentFixture } from '@angular/core/testing'
import { FormsModule } from '@angular/forms'
import { By } from '@angular/platform-browser'
import { RouterTestingModule } from '@angular/router/testing'

import { AppComponent } from './app.component'
import { HeroesComponent } from './heroes/heroes.component'
import { HeroService } from './service/hero.service'

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>
  let compiled: any
  let app: AppComponent

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [
        RouterTestingModule,
        FormsModule
      ],
      declarations: [
        AppComponent,
        HeroesComponent
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

  // ************************
  // **** class testings
  // ************************
  it('should create the app', async(() => {
    expect(app).toBeTruthy()
  }))

  // ************************
  // **** template testing
  // ************************
  it('should render nav > a', async(() => {
    expect(
      compiled.querySelectorAll('nav > a').length
    ).toBe(2)
  }))

  it('should have as title "Tour of Heroes"', async(() => {
    expect(app.title).toEqual('Tour of Heroes')
  }))

  it('should render title in a h1 tag', async(() => {
    expect(compiled.querySelector('h1').textContent)
      .toContain('Tour of Heroes')
  }))

  it('should render Dashboard link to /dashboard', async(() => {
    const elementId = '#router-link-dashboard'
    const element = fixture.debugElement.query(By.css(elementId))
    expect(element.attributes['routerLink']).toEqual('/dashboard')
    expect(element.nativeElement.textContent).toEqual('Dashboard')
  }))

  it('should render Heroes link to /heroes', async(() => {
    const elementId = '#router-link-heroes'
    const element = fixture.debugElement.query(By.css(elementId))
    expect(element.attributes['routerLink']).toEqual('/heroes')
    expect(element.nativeElement.textContent).toEqual('Heroes')
  }))

  it('should render app-heroes tag', async(() => {
    expect(
      fixture
        .debugElement
        .query(By.css('router-outlet'))
    ).toBeTruthy()

  }))
})
