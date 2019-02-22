import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user";
import {AppService} from "../../services/app-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private login: AppService, private router: Router) { }

  public activeSession: boolean;
  public currentUser: User;

  ngOnInit() {
    this.login.currentLoginStatus.subscribe(status => this.activeSession = status);
    this.login.currentLoginUser.subscribe(user => this.currentUser = user);
    if(this.activeSession){
      this.router.navigate(['/create-character']);
    }
  }

}
