import {Component, OnInit} from '@angular/core';
import {Character} from '../../models/character';
import {AppService} from "../../services/app-service.service";
import {Router} from "@angular/router";
import {User} from "../../models/user";
import {HttpDdService} from "../../services/http-dd.service";
import {CharacterService} from "../../services/character.service";

@Component({
  selector: 'app-view-characters',
  templateUrl: './view-characters.component.html',
  styleUrls: ['./view-characters.component.css']
})
export class ViewCharactersComponent implements OnInit {

  constructor(private login: AppService, private router: Router, private http: HttpDdService, private cc: CharacterService) { }

  public activeSession: boolean;
  public currentUser: User;
  public characters: Character[];

  ngOnInit() {
    this.login.currentLoginStatus.subscribe(status => this.activeSession = status);
    this.login.currentLoginUser.subscribe(user => this.currentUser = user);
    this.login.currentCharactersObv.subscribe(characters => this.characters = characters);
    if(!this.activeSession){
      this.router.navigate(['/']);
    }
    for(let x = 0; x < this.characters.length; x++){
      console.log("Character " + this.characters[x].name + ", a " + this.characters[x].alignment + " " + this.characters[x].dndClass + " " + this.characters[x].race);
    }
  }

  characterDelete: Character = null;
  deleteCharacterSuccess: boolean = false;
  deleteCharacterFailed: boolean = false;

  collapsibleCall(id: any){
    for(let x = 0; x < this.characters.length; x++){
      let element: HTMLElement = document.getElementById(this.characters[x].id.toString());
      if(this.characters[x].id != id){
        element.style.display = "none";
      } else if(element.style.display === "block"){
        element.style.display = "none";
      } else {
        element.style.display = "block";
      }
    }
    let focus: HTMLElement = document.getElementById(id);
    focus.focus();
  }

  findCharacter(id: number): Character{
    for(let x = 0; x < this.characters.length; x++){
      if(this.characters[x].id == id){
        return this.characters[x];
      }
    }
    return null;
  }

  deleteCharacter(id: any){
    this.deleteCharacterSuccess = false;
    this.deleteCharacterFailed = false;
    this.characterDelete = this.findCharacter(id);
    this.http.deleteCharacter(this.characterDelete).subscribe(
      bool => this.verifyDelete(bool),
      error => console.log("Failed to receive response to delete character."),
      () => console.log("Delete character completed.")
    );
  }

  verifyDelete(bool: boolean){
    if(bool){
      this.deleteCharacterSuccess = true;
      this.cc.removeCharacter(this.characterDelete);
    } else {
      this.deleteCharacterFailed = true;
    }
  }
}
