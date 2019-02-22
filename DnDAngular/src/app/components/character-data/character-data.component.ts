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

  public ownedClass: any = [];
  public ownedRace: any = [];
  public globalClass: any = [];
  public globalRace: any = [];

  public showOwnedClass: boolean = false;
  public showOwnedRace: boolean = false;
  public showGlobalClass: boolean = false;
  public showGlobalRace: boolean = false;

  ngOnInit() {
    this.login.currentLoginStatus.subscribe(status => this.activeSession = status);
    this.login.currentLoginUser.subscribe(user => this.currentUser = user);
    if(!this.activeSession){
      this.router.navigate(['/']);
    }
    this.getData();
  }

  getData(){
    this.http.getOwnedClasses(this.currentUser).subscribe(
      data => this.ownedClasses(data),
      error => console.log("Failed to get all Owned Classes"),
      () => console.log("Get Owned Classes completed.")
    );

    this.http.getOwnedRaces(this.currentUser).subscribe(
      data => this.ownedRaces(data),
      error => console.log("Failed to get all Owned Races"),
      () => console.log("Get Owned Races completed.")
    );

    this.http.getGlobalClasses().subscribe(
      data => this.globalClasses(data),
      error => console.log("Failed to get all Classes"),
      () => console.log("Get all Classes completed.")
    );

    this.http.getGlobalRaces().subscribe(
      data => this.globalRaces(data),
      error => console.log("Failed to get all Races"),
      () => console.log("Get all Races completed.")
    );
  }

  ownedClasses(data: any){
    this.ownedClass = this.alterResultsForChart(data);

  }

  ownedRaces(data: any){
    this.ownedRace = this.alterResultsForChart(data);
  }

  globalClasses(data: any){
    this.globalClass = this.alterResultsForChart(data);
  }

  globalRaces(data: any){
    this.globalRace = this.alterResultsForChart(data);
  }

  alterResultsForChart(data: any){
    let returnData: any = [];
    let keys: string[] = [];
    let values: number[] = [];
    keys = Object.keys(data);
    values = Object.values(data);
    for(let x = 0; x < keys.length; x++){
      returnData.push([keys[x], values[x]]);
    }
    return returnData;
  }
}
