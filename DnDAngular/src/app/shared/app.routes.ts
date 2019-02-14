import { Route } from '@angular/router';
import { CreateCharacterComponent } from '../components/create-character/create-character.component';
import { LoginComponent } from '../components/login/login.component';
import { ViewCharactersComponent } from '../components/view-characters/view-characters.component';


export const AppRoutes: Route[] = [
  {
    path: "",
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
