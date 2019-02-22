import { Component, OnInit } from '@angular/core';
import {Character} from '../../models/character';
import {User} from "../../models/user";
import {AppService} from "../../services/app-service.service";
import {Router} from "@angular/router";
import {CharacterService} from "../../services/character.service";
import {HttpDdService} from "../../services/http-dd.service";

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {

  constructor(private login: AppService, private router: Router, private http: HttpDdService, private cc: CharacterService) { }

  public activeSession: boolean;
  public currentUser: User;
  public currentCharacter: Character;
  public displayCharacter: Character;

  ngOnInit() {
    this.login.currentLoginStatus.subscribe(status => this.activeSession = status);
    this.login.currentLoginUser.subscribe(user => this.currentUser = user);
    this.login.currentCharacterObv.subscribe(character => this.currentCharacter);
    if(!this.activeSession){
      this.router.navigate(['/']);
    } else {
      this.generateCharacter();
    }
  }

  formClickable: boolean = true;

  characterSaved: boolean = false;
  failedCharacterSave: boolean = false;
  attemptingCharacterSave: boolean = false;

  alignments: string[] = ['Lawful Good', 'Neutral Good', 'Chaotic Good', 'Lawful Neutral', 'True Neutral', 'Chaotic Neutral', 'Lawful Evil', 'Neutral Evil', 'Chaotic Evil'];

  public raceURL: string = "/DnDGenerator/Generator/Races";
  public classURL: string = "/DnDGenerator/Generator/Classes";
  public servName: string = "/DnDGenerator/Generator/Name";

  generateCharacter(){
    this.login.getNextCharacter();
    this.displayCharacter = this.currentCharacter;
  }

  saveCharacter(){
    this.formClickable = false;
    this.characterSaved = false;
    this.failedCharacterSave = false;
    this.http.saveCharacter(this.currentCharacter).subscribe(
      data => this.verifySaveCharacter(data),
      error => {console.error("Failed to send Save Character");
        this.formClickable = true;
        this.failedCharacterSave = true;},
      () => console.log("Save Character call completed.")
    );
  }

  verifySaveCharacter(data: number){
    console.log("Character ID Received: " + data);
    if(data > 0){
      this.characterSaved = true;
      this.displayCharacter.id = data;
      this.cc.addCharacter(this.displayCharacter);
      this.generateCharacter();
    } else {
      this.failedCharacterSave = true;
    }
    this.formClickable = true;
  }
}
