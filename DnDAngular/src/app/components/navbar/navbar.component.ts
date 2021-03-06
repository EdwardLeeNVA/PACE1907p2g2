import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import { AppService } from '../../services/app-service.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  inputs: ['activeSession',
           'currentUser']
})
export class NavbarComponent implements OnInit {

  constructor(private login: AppService) { }

  public activeSession: boolean;
  public currentUser: User;

  ngOnInit() {
    this.login.currentLoginStatus.subscribe(status => this.activeSession = status);
    this.login.currentLoginUser.subscribe(user => this.currentUser = user);
  }

  logout(){
    this.login.updateCurrentUser(null);
    this.login.updateLoginStatus(false);
  }
}
