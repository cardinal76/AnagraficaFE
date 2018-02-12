import { Component, OnInit } from '@angular/core';
import { AnagraficaService } from '../anagrafica.service';
import { AnagraficaModel } from './../anagraficaModel';
@Component({
  selector: 'app-an-lista',
  templateUrl: './an-lista.component.html',
  styleUrls: ['./an-lista.component.css'],
  providers: [AnagraficaService]
})
export class AnListaComponent implements OnInit {
  pluto = 'Pluto';
  anagraficaModel: AnagraficaModel[];

  constructor(private anagraficaService: AnagraficaService) { }

  ngOnInit() {
    console.log('on init');

    this.anagraficaService.getAnagrafica().subscribe(anagraficaModel => this.anagraficaModel = anagraficaModel);

      // console.log('on init nome' + this.anagraficaModel.nome);
      // console.log('on init cognome' + this.anagraficaModel.cognome);
  }

}
