import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
   providers:  [ HeroService ]
})
export class HeroesComponent implements OnInit {
  // esempio di proprietà
  pluto = 'Pluto';
  // heroes = HEROES; mokkato
  // servizio
  heroes: Hero[];


  // esempio di classe
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  selectedHero: Hero;

onSelect(hero: Hero): void {
  this.selectedHero = hero;
}


  constructor(private heroService: HeroService ) { }


  ngOnInit() {
    this.getHeroes();
  }

getHeroes(): void {
  this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
}

}
