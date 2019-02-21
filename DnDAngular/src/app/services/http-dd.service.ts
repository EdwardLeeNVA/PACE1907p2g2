/*
HTTP Service to provide HTTPClient functionality to components.
All methods return an observable for the components to subscribe and handle.
 */

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user';
import {Character} from "../models/character";

@Injectable({
  providedIn: 'root'
})
export class HttpDdService {

  constructor(private http: HttpClient) { }

  //Placeholder for Front Controller URI
  private dbURL: string = "/DnDGenerator/Generator/";

  //Header to specify JSON content for POST/PUT
  private httpJSON = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })};

  //Returns Observable for Login component to process
  verifyLogin(login: User): Observable<User>{
    const loginPath: string = this.dbURL + 'Login';
    return this.http.post<User>(loginPath, login, this.httpJSON);
  }

  registerUser(register: User): Observable<boolean>{
    const registerPath: string = this.dbURL + 'Register';
    return this.http.post<boolean>(registerPath, register, this.httpJSON);
  }

  saveCharacter(character: Character): Observable<boolean>{
    const saveCharacterPath: string = this.dbURL + 'Save';
    return this.http.post<boolean>(saveCharacterPath, character, this.httpJSON);
  }

  fetchClass(): Observable<string>{
    const fetchClassPath: string = this.dbURL + 'Classes';
    return this.http.get<string>(fetchClassPath);
  }

  getClassInfo(dndClass: string): Observable<any>{
    const fetchClassInfoPath: string = this.dbURL + 'Classes/' + dndClass;
    return this.http.get<any>(fetchClassInfoPath);
  }

  getAllCharacters(user: User): Observable<Character[]>{
    const fetchAllCharactersPath: string = this.dbURL + 'Character';
    return this.http.post<Character[]>(fetchAllCharactersPath, user, this.httpJSON);
  }

  deleteCharacter(character: Character): Observable<boolean>{
    const deleteCharacter: string = this.dbURL + 'Delete';
    return this.http.post<boolean>(deleteCharacter, character, this.httpJSON);
  }

  getOwnedClasses(user: User){
    const getOwnedCharacters: string = this.dbURL + 'Chart/PlayerClass';
    return this.http.post<any>(getOwnedCharacters, user, this.httpJSON);
  }

  getOwnedRaces(user: User){
    const getOwnedRaces: string = this.dbURL + 'Chart/PlayerRace';
    return this.http.post<any>(getOwnedRaces, user, this.httpJSON);
  }

  getGlobalClasses(){
    const getCharacters: string = this.dbURL + 'Chart/GlobalClass';
    return this.http.get<any>(getCharacters);
  }

  getGlobalRaces(){
    const getRaces: string = this.dbURL + 'Chart/GlobalRace';
    return this.http.get<any>(getRaces);
  }
}
