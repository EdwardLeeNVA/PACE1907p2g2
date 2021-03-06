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
  deleteCharacterSuccess: boolean = false;
  deleteCharacterFailed: boolean = false;
  deleteCharacterID: number = -1;
  deletedCharacter: Character;


  getAllCharacters(){
    console.log("Get all Characters Called.");
    this.http.getAllCharacters(this.currentUser).subscribe(
      characters => this.formatAllCharacters(characters),
      error => console.log("Failed to receive all characters."),
      () => console.log("Register User call completed.")
    );
  }

  formatAllCharacters(characters: Character[]){
    this.characters = characters;
    this.removeEmptyProciencies();
  }

  removeEmptyProciencies(){
    let count = 0;
    let newList: string[] = [];
    while(count < this.characters.length){
      let profCount = 0;
      while(profCount < this.characters[count].proficiencies.length) {
        if((this.characters[count].proficiencies[profCount] != null) && (this.characters[count].proficiencies[profCount] != '')){
          newList.push(this.characters[count].proficiencies[profCount]);
        }
        profCount++;
      }
      this.characters[count].proficiencies = newList;
      newList = [];
      count++;
    }
  }

  deleteCharacter(character: Character){
    this.deletedCharacter = character;
    this.deleteCharacterSuccess = false;
    this.deleteCharacterFailed = false;
    this.deleteCharacterID = character.id;
    console.log(character);
    this.http.deleteCharacter(character).subscribe(
      bool => this.verifyDelete(bool),
      error => console.log("Failed to receive response to delete character."),
      () => console.log("Delete character completed.")
    );
  }

  verifyDelete(bool: boolean){
    scroll(0,0);
    if(bool){
      this.deleteCharacterSuccess = true;
      this.removeDeletedCharacter();
    } else {
      this.deleteCharacterFailed = true;
    }
  }

  removeDeletedCharacter(){
    let newList: Character[] = [];
    for(let x = 0; x < this.characters.length; x++){
      if(this.characters[x].id != this.deleteCharacterID){
        newList.push(this.characters[x]);
      }
    }
    this.characters = newList;
  }
}
