import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../model/hero';
import { HeroService } from '../service/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero;
  heroes: Hero[];

  constructor(
    private route: Router,
    private heroService: HeroService
  ) {}

  ngOnInit(): void {
    this.heroService
          .getHeroes()
          .subscribe(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  gotoDetail() {
    this.route.navigate(['/detail', this.selectedHero.id]);
  }

}
