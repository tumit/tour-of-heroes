import { Component, OnInit } from '@angular/core';

import { Hero } from './model/hero';
import { HeroService } from './service/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';

  constructor(
  ) {}

  ngOnInit(): void {
  }
}
