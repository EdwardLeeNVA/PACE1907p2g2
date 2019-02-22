import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { GoogleChartsModule } from "angular-google-charts";


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {HttpDdService} from './services/http-dd.service';
import { LoginComponent } from './components/login/login.component';
import { CreateCharacterComponent } from './components/create-character/create-character.component';
import { ViewCharactersComponent } from './components/view-characters/view-characters.component';
import { AppRoutes } from './shared/app.routes';
import { LandingComponent } from './components/landing/landing.component';
import {AppService} from "./services/app-service.service";
import { CharacterDataComponent } from './components/character-data/character-data.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    CreateCharacterComponent,
    ViewCharactersComponent,
    LandingComponent,
    CharacterDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes),
    GoogleChartsModule.forRoot()
  ],
  providers: [
    HttpDdService,
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
