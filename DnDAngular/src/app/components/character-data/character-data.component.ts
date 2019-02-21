import { Component, OnInit } from '@angular/core';
import {AppService} from "../../services/app-service.service";
import {Router} from "@angular/router";
import {User} from "../../models/user";
import {HttpDdService} from "../../services/http-dd.service";

@Component({
  selector: 'app-character-data',
  templateUrl: './character-data.component.html',
  styleUrls: ['./character-data.component.css']
})
export class CharacterDataComponent implements OnInit {

  constructor(private login: AppService, private router: Router, private http: HttpDdService) { }

  public activeSession: boolean;
  public currentUser: User;

  public ownedCharacter: any = {};
  public ownedRace: any = {};

  public globalCharacter: any = {};
  public globalRace: any = {};

  ngOnInit() {
    this.login.currentLoginStatus.subscribe(status => this.activeSession = status);
    this.login.currentLoginUser.subscribe(user => this.currentUser = user);
    if(!this.activeSession){
      this.router.navigate(['/']);
    }
    this.testCalls();
  }

  testCalls(){
    this.http.getOwnedClasses(this.currentUser).subscribe(
      value => console.log(value),
      error => console.log("Failed to get all Owned Classes"),
      () => console.log("Get Owned Classes completed.")
    );

    this.http.getOwnedRaces(this.currentUser).subscribe(
      value => console.log(value),
      error => console.log("Failed to get all Owned Races"),
      () => console.log("Get Owned Races completed.")
    );

    this.http.getGlobalClasses().subscribe(
      value => console.log(value),
      error => console.log("Failed to get all Classes"),
      () => console.log("Get all Classes completed.")
    );

    this.http.getGlobalRaces().subscribe(
      value => console.log(value),
      error => console.log("Failed to get all Races"),
      () => console.log("Get all Races completed.")
    );
  }



}
