/*


Created using: https://angularfirebase.com/lessons/sharing-data-between-angular-components-four-methods/
 */

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {User} from '../models/user';
import {Character} from "../models/character";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private loginStatus = new BehaviorSubject(false);
  public currentLoginStatus = this.loginStatus.asObservable();

  private currentUser = new BehaviorSubject(null);
  public currentLoginUser = this.currentUser.asObservable();

  private characterQueue = new BehaviorSubject(null);
  public characterQueueList = this.characterQueue.asObservable();

  private namesQueue = new BehaviorSubject(null);
  public namesQueueList = this.namesQueue.asObservable();

  private currentCharacter = new BehaviorSubject(null);
  public currentCharacterObv = this.currentCharacter.asObservable();

  constructor() { }

  updateLoginStatus(updateStatus: boolean){
    this.loginStatus.next(updateStatus);
  }

  updateCurrentUser(updateUser: User){
    this.currentUser.next(updateUser);
  }

  loadCharacterQueue(){

  }

  getCharacter(): Character{
    return null;
  }

  loadNameQueue(){

  }

  getName(): string{
    return ' ';
  }

  updateCurrentCharacter(character: Character){
    this.currentCharacter.next(character);
  }
}


