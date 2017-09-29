import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { HeroDetailComponent } from './hero-detail.component';

describe('HeroDetailComponent', () => {
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;
  let compiled: any;
  const selectedHero = { id: 12, name: 'Narco' };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [HeroDetailComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;

    component.hero = selectedHero;
    fixture.detectChanges();
  });

  it('should render hero details in a h2.hero-details', async(() => {
    expect(
      compiled.querySelector('h2.hero-details').textContent
    ).toContain(selectedHero.name);
  }));

  it('should render hero id in a span.hero-id', async(() => {
    expect(
      compiled.querySelector('span.hero-id').textContent
    ).toContain(selectedHero.id);
  }));

  it('should render placeholder', async(() => {
    expect(
      compiled.querySelector('input.hero-name').placeholder
    ).toBe('name');
  }));

  it('should render hero.name in a input.hero-name', async(() => {
    fixture
      .whenStable()
      .then(() => {
        expect(
          compiled.querySelector('input.hero-name').value
        ).toBe(selectedHero.name);
      });
  }));
});
