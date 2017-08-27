import { TestBed, async } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'

import { AppComponent } from './app.component'
import { FormsModule } from '@angular/forms'
import { tick } from '@angular/core/testing'
import { fakeAsync } from '@angular/core/testing'

describe('AppComponent', () => {

  let fixture: any
  let compiled: any

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
    compiled = fixture.debugElement.nativeElement
  }))

  it('should create the app', async(() => {
    const app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy()
  }))

  it(`should have as title 'Tour of Heroes'`, async(() => {
    const app = fixture.debugElement.componentInstance
    expect(app.title).toEqual('Tour of Heroes')
  }))

  it('should render title in a h1 tag', async(() => {
    fixture.detectChanges()
    expect(compiled.querySelector('h1').textContent).toContain('Tour of Heroes')
  }))

  it(`should have as hero`, async(() => {
    const app = fixture.debugElement.componentInstance
    expect(app.hero).toEqual({
      id: 1,
      name: 'Windstorm'
    })
  }))

  it('should render hero details in a h2 tag', async(() => {
    expect(compiled.querySelector('h2').textContent)
      .toContain('Windstorm details!')
  }))

  it('should render hero id in a span.hero-id', async(() => {
    expect(
      compiled.querySelector('span.hero-id').textContent
    ).toContain('1')
  }))

  it('should render hero name in a input.hero-name', fakeAsync(() => {
    tick()
    expect(
      compiled.querySelector('input.hero-name').value
    ).toBe('Windstorm')
  }))

  it(`should render 'My heroes' in a h2 tag`, async(() => {
    expect(compiled.querySelector('h2.my-heroes').textContent)
      .toContain('My Heroes')
  }))

  it('should render heroes in span.badge', fakeAsync(() => {
    tick()
    expect(
      compiled.querySelectorAll('span.badge').length
    ).toBe(10)
  }))

  it('should render heroes in ul>li:first-child', fakeAsync(() => {
    tick()
    expect(
      compiled.querySelector('ul>li:first-child').textContent.trim()
    ).toBe('11 Mr. Nice')
  }))
})
