import {Component, OnInit} from '@angular/core';
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
  collapsibles: Element[] = null;
  deleteCharacterSuccess: boolean = false;
  deleteCharacterFailed: boolean = false;


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
    for(let x = 0; x < characters.length; x++){
      console.log("Character: " + characters[x].name + ": ID: " + characters[x].id);
    }
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
    let character: Character = this.findCharacter(id);
    console.log(character);
    this.http.deleteCharacter(character).subscribe(
      bool => this.verifiyDelete(bool),
      error => console.log("Failed to receive response to delete character."),
      () => console.log("Delete character completed.")
    );
  }

  verifiyDelete(bool: boolean){
    if(bool){
      this.deleteCharacterSuccess = true;
    } else {
      this.deleteCharacterFailed = true;
    }
  }
}
