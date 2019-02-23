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

  private initArray: Character[] = [
    {
      id: 0,
      playerId: 0,
      name: 'Dummy',
      race: 'Elf',
      dndClass: 'Fighter',
      proficiencies: [
        'Lumberjack',
        'Flare'
      ],
      alignment: 'Chaotic Good'
    },
    {
      id: 1,
      playerId: 0,
      name: 'Data',
      race: 'Human',
      dndClass: 'Fighter',
      proficiencies: [
        'Lumberjack',
        'Flare'
      ],
      alignment: 'Chaotic Good'
    }
  ];

  private loginStatus = new BehaviorSubject(false);
  public currentLoginStatus = this.loginStatus.asObservable();

  private currentUser = new BehaviorSubject(null);
  public currentLoginUser = this.currentUser.asObservable();

  //Current character active in Create Character Screen
  private currentCharacter = new BehaviorSubject(null);
  public currentCharacterObv = this.currentCharacter.asObservable();

  private charactersList = new BehaviorSubject(null);
  public charactersListObservable = this.charactersList.asObservable();

  private allCharacters: Character[] = [];

  constructor(private cc: CharacterService) { }

  updateLoginStatus(updateStatus: boolean){
    this.loginStatus.next(updateStatus);
  }

  updateCurrentUser(updateUser: User){
    this.currentUser.next(updateUser);
  }

  updateCharactersList(resp: any){
    this.charactersList.next(resp);
  }

  getNextCharacter(){
    this.currentCharacter.next(this.cc.getNewCharacter());
  }

  getAllCharacters(){
    return this.charactersList.value;
  }

  initCreateCharacters(){
    this.cc.initCharacterQueue();
  }

  initCurrentUserCharacters(){
    this.cc.getMyCharacters(this.currentUser.value);
  }
}


