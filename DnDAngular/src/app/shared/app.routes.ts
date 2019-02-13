import { Route } from '@angular/router';
import { CreateCharacterComponent } from '../components/create-character/create-character.component';
import { LoginComponent } from '../components/login/login.component';
import { ViewCharactersComponent } from '../components/view-characters/view-characters.component';
import {LandingPageComponent} from '../components/landing-page/landing-page.component';


export const AppRoutes: Route[] = [
  {
    path: "",
    component: LandingPageComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "create-character",
    component: CreateCharacterComponent
  },
  {
    path: "view-characters",
    component: ViewCharactersComponent
  }
];
