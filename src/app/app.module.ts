// import { AnCreateComponent } from './anagrafe/an-create/an-create.component';
// import { AnListaComponent } from './anagrafe/an-lista/an-lista.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { provideRoutes} from '@angular/router';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnagrafeModule } from './anagrafe/anagrafe.module';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';

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
     HttpClientModule

  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
