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
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';

 import { HeroService } from './hero.service';
 import { HeroesComponent } from './heroes/heroes.component';
 import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
const firebaseConfig = {
    apiKey: 'AIzaSyAwz6UJLbSLjILWobxBvqDXkOBLpoCVJ-4',
    authDomain: 'anagraficardi.firebaseapp.com',
    databaseURL: 'https://anagraficardi.firebaseio.com',
    projectId: 'anagraficardi',
    storageBucket: '',
    messagingSenderId: '352965876755'
};
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AnagrafeModule,
     AppRoutingModule,
     HttpClientModule,
      AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule

  ],
  providers: [
      AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
