import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Hero } from '../model/hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    return Observable.of(HEROES);
  }
}
