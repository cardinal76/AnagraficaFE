import { Component, OnInit } from '@angular/core';
import { AnagraficaService } from './../../anagrafica.service';
@Component({
  selector: 'app-an-lista',
  templateUrl: './an-lista.component.html',
  styleUrls: ['./an-lista.component.css']
})
export class AnListaComponent implements OnInit {
 heroes = null;
  constructor(private anagServ: AnagraficaService) { }

  ngOnInit() {
  }

  getLista(): void {
    this.heroes = this.anagServ.getLista();
   // this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }


}
