import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../service/hero.service';
import { HEROES } from '../service/mock-heroes';
import { HeroesComponent } from './heroes.component';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;
  let compiled: any;

  const selectedHero = HEROES[1];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule
      ],
      declarations: [ HeroesComponent, HeroDetailComponent ],
      providers: [
        HeroService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  // ************************
  // **** class testings
  // ************************
  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render "My heroes" in a h2 tag', async(() => {
    expect(
      compiled.querySelector('h2.my-heroes').textContent
    ).toContain('My Heroes');
  }));

  it('should init heroes form serive', async(() => {
    component.ngOnInit();
    expect(component.heroes).toBe(HEROES);
  }));

  it('should set selectedHero after onSelect(hero)', async(() => {
    // act
    component.onSelect(selectedHero);

    // assert
    expect(component.selectedHero).toBe(selectedHero);
  }));

  // ************************
  // **** template testing
  // ************************
  it('should render heroes in span.badge', async(() => {
    expect(
      compiled.querySelectorAll('span.badge').length
    ).toBe(HEROES.length);
  }));

  it('should render 11 Mr. Nice in ul>li:first-child', async(() => {
    expect(
      compiled.querySelector('ul>li:first-child').textContent.trim()
    ).toBe('11 Mr. Nice');
  }));

  it('should render 11 Mr. Nice in ul>li:last-child', async(() => {
    expect(
      compiled.querySelector('ul>li:last-child').textContent.trim()
    ).toBe('20 Tornado');
  }));

  it('should bind selectedHero to HeroDetailComponent.hero', async(() => {
    expect(
      fixture
        .debugElement
        .query(By.css('app-hero-detail'))
        .componentInstance.hero
    ).toBe(component.selectedHero);
  }));
});
