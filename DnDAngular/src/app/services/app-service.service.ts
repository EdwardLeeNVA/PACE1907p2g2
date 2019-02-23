/*


Created using: https://angularfirebase.com/lessons/sharing-data-between-angular-components-four-methods/
 */

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {User} from '../models/user';
import {Character} from "../models/character";
import {CharacterService} from "./character.service";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private initArray: Character[] = [];

  private loginStatus = new BehaviorSubject(false);
  public currentLoginStatus = this.loginStatus.asObservable();

  private currentUser = new BehaviorSubject(null);
  public currentLoginUser = this.currentUser.asObservable();

  //Current character active in Create Character Screen
  private currentCharacter = new BehaviorSubject(null);
  public currentCharacterObv = this.currentCharacter.asObservable();

  private currentCharacters = new BehaviorSubject(this.initArray);
  public currentCharactersObv = this.currentCharacters.asObservable();


  constructor(private cc: CharacterService) { }

  updateLoginStatus(updateStatus: boolean){
    this.loginStatus.next(updateStatus);
  }

  updateCurrentUser(updateUser: User){
    this.currentUser.next(updateUser);
  }

  updateCurrentCharacters(characters: Character[]){
    this.currentCharacters.next(characters);
  }

  getNextCharacter(){
    this.currentCharacter.next(this.cc.getNewCharacter());
  }

  getAllCharacters(){
    return this.currentCharacters.getValue();
  }

  initCreateCharacters(){
    this.cc.initCharacterQueue();
  }

  initCurrentUserCharacters(){
    this.cc.getMyCharacters(this.currentUser.getValue());
  }
}


