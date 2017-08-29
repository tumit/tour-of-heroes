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
})
