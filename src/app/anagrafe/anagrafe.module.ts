import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnagrafeRoutingModule } from './anagrafe-routing.module';
import { AnListaComponent } from './an-lista/an-lista.component';
import { AnCreateComponent } from './an-create/an-create.component';

@NgModule({
  imports: [
    CommonModule,
    AnagrafeRoutingModule
  ],
  declarations: [AnListaComponent, AnCreateComponent]
})
export class AnagrafeModule { }
