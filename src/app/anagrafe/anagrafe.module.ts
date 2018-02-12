import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnagrafeRoutingModule } from './anagrafe-routing.module';
import { AnListaComponent } from './an-lista/an-lista.component';
import { AnCreateComponent } from './an-create/an-create.component';
import { HttpClient } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    AnagrafeRoutingModule
  ],
  declarations: [AnListaComponent, AnCreateComponent],
  providers: [
  HttpClient
  ],
})
export class AnagrafeModule { }
