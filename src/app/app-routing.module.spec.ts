
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, TestBed, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { Location, APP_BASE_HREF } from '@angular/common';
import { routes, AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';

describe('App Routing Module', () => {

  let location: Location;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [
        RouterTestingModule.withRoutes(routes)
      ],
      declarations: [
        DashboardComponent,
        HeroesComponent,
        HeroDetailComponent
      ]
    });
    location = TestBed.get(Location);
    router = TestBed.get(Router);
  });

  it('should redirect to /dashboard with root path', async(() => {
    router.navigate(['']).then(() => {
      expect(location.path()).toBe('/dashboard');
    });
  }));

  it('should redirect to /dashboard with "/dashboard"', async(() => {
    router.navigate(['dashboard']).then(() => {
      expect(location.path()).toBe('/dashboard');
    });
  }));

  it('should redirect to /heroes with "/heroes"', async(() => {
    router.navigate(['heroes']).then(() => {
      expect(location.path()).toBe('/heroes');
    });
  }));

  it('should redirect to /detail/1 with "/detail/1"', async(() => {
    router.navigate(['detail/1']).then(() => {
      expect(location.path()).toBe('/detail/1');
    });
  }));

});
