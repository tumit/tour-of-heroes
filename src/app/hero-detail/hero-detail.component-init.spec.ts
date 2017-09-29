import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { HeroDetailComponent } from './hero-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HeroService } from '../service/hero.service';

describe('HeroDetailComponent init', () => {
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;
  let compiled: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule
      ],
      declarations: [ HeroDetailComponent ],
      providers: [ HeroService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  // ************************
  // **** class testing
  // ************************
  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  // ************************
  // **** template testing
  // ************************
  it('should hide hero-panel with not select hero', async(() => {
    expect(compiled.querySelector('div.hero-panel')).toBeNull();
  }));

});
