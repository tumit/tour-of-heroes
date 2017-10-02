import { By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs/Rx';

import { Hero } from '../model/hero';
import { HeroService } from '../service/hero.service';
import { HEROES } from '../service/mock-heroes';
import { DashboardComponent } from './dashboard.component';

// ****
// **** Mocks
// ****
export const topHeores: Hero[] = [
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' }
];

class MockHeroService extends HeroService {
  getHeroes(): Observable<Hero[]> {
    return Observable.of(HEROES);
  }
}

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let compiled: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        DashboardComponent
      ],
      providers: [
        { provide: HeroService, useClass: MockHeroService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should heroes be top 4 of heroes', () => {
    expect(component.heroes).toEqual(topHeores);
  });

  it('should render "Top Heroes" in a h3 tag', async(() => {
    expect(compiled.querySelector('h3.top-heroes').textContent)
      .toContain('Top Hero');
  }));

  it('should render จำนวน link เท่ากับจำนวน Top Heroes', async(() => {
    expect(compiled.querySelectorAll('a.hero-link').length)
    .toEqual(topHeores.length);
  }));

  it('should render link ด้วย url "detail/[hero.id]"', async(() => {
    expect(compiled.querySelector('a.hero-link:first-child').getAttribute('href'))
      .toEqual('/detail/12');
  }));

});
