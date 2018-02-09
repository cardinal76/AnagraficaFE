import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnListaComponent } from './an-lista/an-lista.component';
import { AnCreateComponent } from './an-create/an-create.component';
const routes: Routes = [
  {path: 'anlista', component: AnListaComponent},
  {path: 'an/create', component: AnCreateComponent},
  {path: 'an/edit/:id', component: AnCreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnagrafeRoutingModule { }
