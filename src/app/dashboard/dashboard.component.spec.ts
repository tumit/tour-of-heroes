import { HEROES } from '../service/mock-heroes';
import { Hero } from '../model/hero';
import { Observable } from 'rxjs/Rx';
import { HeroService } from '../service/hero.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';

// ****
// **** Mocks
// ****
export const expectedHeores: Hero[] = [
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
      declarations: [ DashboardComponent ],
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
    expect(component.heroes).toEqual(expectedHeores);
  });

  it('should render "Top Heroes" in a h3 tag', async(() => {
    expect(compiled.querySelector('h3.top-heroes').textContent).toContain('Top Hero');
  }));

});
