import { Component, OnInit } from '@angular/core';
import {Character} from '../../models/character';
import {LoginService} from "../../services/login-service.service";
import {Router} from "@angular/router";
import {User} from "../../models/user";

@Component({
  selector: 'app-view-characters',
  templateUrl: './view-characters.component.html',
  styleUrls: ['./view-characters.component.css']
})
export class ViewCharactersComponent implements OnInit {

  constructor(private login: LoginService, private router: Router) { }

  public activeSession: boolean;
  public currentUser: User;

  ngOnInit() {
    this.login.currentLoginStatus.subscribe(status => this.activeSession = status);
    this.login.currentLoginUser.subscribe(user => this.currentUser = user);
    if(!this.activeSession){
      this.router.navigate(['/']);
    }
  }



}
