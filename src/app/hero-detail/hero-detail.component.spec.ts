import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { FormsModule } from '@angular/forms'

import { HeroDetailComponent } from './hero-detail.component'

describe('HeroDetailComponent', () => {
  let component: HeroDetailComponent
  let fixture: ComponentFixture<HeroDetailComponent>
  let compiled: any

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [ HeroDetailComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailComponent)
    component = fixture.componentInstance
    compiled = fixture.debugElement.nativeElement

    fixture.detectChanges()
  })

  it('should be created', () => {
    expect(component).toBeTruthy()
  })

  it(`should not display when hero is not select`, async(() => {
    expect(compiled.querySelector('div.hero-panel'))
      .toBeNull()
  }))
})
