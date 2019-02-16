import { Route } from '@angular/router';
import { CreateCharacterComponent } from '../components/create-character/create-character.component';
import { LoginComponent } from '../components/login/login.component';
import { ViewCharactersComponent } from '../components/view-characters/view-characters.component';
import {LandingComponent} from '../components/landing/landing.component';
import {ProfileComponent} from '../components/profile/profile.component';


export const AppRoutes: Route[] = [
  {
    path: "",
    component: LandingComponent
  },
  {
    path: "create-character",
    component: CreateCharacterComponent
  },
  {
    path: "view-characters",
    component: ViewCharactersComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "profile",
    component: ProfileComponent
  },
  {
    path: "landing-page",
    component: LandingComponent
  }
];
