import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {InsertComponent} from "./insert/insert.component";
import {ListComponent} from "./list/list.component";

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"insert", component: InsertComponent},
  {path:"list", component: ListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
