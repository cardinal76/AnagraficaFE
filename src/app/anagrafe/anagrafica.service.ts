import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import { AnagraficaModel } from './AnagraficaModel';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AnagraficaService {

  constructor(private http: HttpClient) { }


  getAnagrafica(): Observable<AnagraficaModel[]> {

  console.log('dentro getanagrafica');
     return this.http.get<AnagraficaModel[]>('http://localhost:8080/anagrafica/findAll');


}

}
