<<<<<<< HEAD
// import { AnCreateComponent } from './anagrafe/an-create/an-create.component';
// import { AnListaComponent } from './anagrafe/an-lista/an-lista.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnagrafeModule } from './anagrafe/anagrafe.module';
import { FormsModule } from '@angular/forms';
// import { HeroService } from './hero.service';
// import { HeroesComponent } from './heroes/heroes.component';
// import { HeroDetailComponent } from './hero-detail/hero-detail.component';


@NgModule({
  declarations: [
    AppComponent,
  //  HeroesComponent,
  //  HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AnagrafeModule,
     AppRoutingModule,
  ],
  providers: [

  ],
=======
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
>>>>>>> branch 'master' of https://github.com/cardinal76/AnagraficaFE.git
  bootstrap: [AppComponent]
})
export class AppModule { }
