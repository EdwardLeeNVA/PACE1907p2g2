import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {HttpDdService} from './services/http-dd.service';
import { LoginComponent } from './components/login/login.component';
import { CreateCharacterComponent } from './components/create-character/create-character.component';
import { ViewCharactersComponent } from './components/view-characters/view-characters.component';
import { AppRoutes } from './shared/app.routes';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    CreateCharacterComponent,
    ViewCharactersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [
    HttpDdService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
