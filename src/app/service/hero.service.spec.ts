import { HEROES } from './mock-heroes'
import { TestBed, inject } from '@angular/core/testing'

import { HeroService } from './hero.service'
import { Observable } from 'rxjs/Rx'

describe('HeroService', () => {

  const expectedHero = HEROES

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroService]
    })
  })

  it('should be created', inject([HeroService], (service: HeroService) => {
    expect(service).toBeTruthy()
  }))

  it(`should return heroes when call getHeroes`,
    inject([HeroService], (service: HeroService) => {
      service
        .getHeroes()
        .subscribe(heroes => {
          expect(heroes).toBe(expectedHero)
      })
    })
  )

})
