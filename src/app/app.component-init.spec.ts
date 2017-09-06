import { NO_ERRORS_SCHEMA } from '@angular/core'
import { async, TestBed } from '@angular/core/testing'
import { FormsModule } from '@angular/forms'
import { By } from '@angular/platform-browser'
import { RouterTestingModule } from '@angular/router/testing'

import { AppComponent } from './app.component'
import { HeroesComponent } from './heroes/heroes.component'
import { HeroService } from './service/hero.service'

describe('AppComponent', () => {

  let fixture: any
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

  it('should create the app', async(() => {
    expect(app).toBeTruthy()
  }))

  it('should have as title "Tour of Heroes"', async(() => {
    expect(app.title).toEqual('Tour of Heroes')
  }))

  it('should render title in a h1 tag', async(() => {
    expect(compiled.querySelector('h1').textContent)
      .toContain('Tour of Heroes')
  }))

  it('should render app-heroes tag', async(() => {
    expect(
      fixture
        .debugElement
        .query(By.css('app-heroes'))
        .componentInstance
    ).toBeTruthy()
  }))
})
