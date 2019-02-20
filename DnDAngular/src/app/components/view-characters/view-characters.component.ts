import { Component, OnInit } from '@angular/core';
import {Character} from '../../models/character';
import {AppService} from "../../services/app-service.service";
import {Router} from "@angular/router";
import {User} from "../../models/user";
import {HttpDdService} from "../../services/http-dd.service";

@Component({
  selector: 'app-view-characters',
  templateUrl: './view-characters.component.html',
  styleUrls: ['./view-characters.component.css']
})
export class ViewCharactersComponent implements OnInit {

  constructor(private login: AppService, private router: Router, private http: HttpDdService) { }

  public activeSession: boolean;
  public currentUser: User;

  ngOnInit() {
    this.login.currentLoginStatus.subscribe(status => this.activeSession = status);
    this.login.currentLoginUser.subscribe(user => this.currentUser = user);
    if(!this.activeSession){
      this.router.navigate(['/']);
    } else {
      this.getAllCharacters();
    }
  }

  characters: Character[] = null;

  getAllCharacters(){
    console.log("Get all Characters Called.");
    this.http.getAllCharacters(this.currentUser).subscribe(
      characters => this.characters = characters,
      error => console.log("Failed to receive all characters."),
      () => console.log("Register User call completed.")
    );
  }

}
