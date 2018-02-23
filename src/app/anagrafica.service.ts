import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

const API_URL = environment.apiUrl;

interface Course {
    description: string;
    courseListIcon: string;
    iconUrl: string;
    longDescription: string;
    url: string;
}

@Injectable()
export class AnagraficaService implements OnInit {
courses$: Observable<Course[]>;
  constructor(private http: HttpClient) { }


  getLista() {
     this.courses$ = this.http
            .get<Course[]>('/courses.json')
            .map(data => _.values(data))
            .do(console.log);
  }

  ngOnInit() {

}

}
