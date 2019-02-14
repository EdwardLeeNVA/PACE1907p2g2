import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class HttpDdService {

  constructor(private http: HttpClient) { }

  //Placeholder for Front Controller URI
  private dbURL: string = "/";

  //Header to specify JSON content for POST/PUT
  private httpJSON = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })};

  //Root URL for D&D API
  private ddURL: string = "http://dnd5eapi.co/api/";

  //Returns Observable for Login component to process
  verifyLogin(login: User): Observable<User>{
    const loginPath: string = this.dbURL + 'DnDGenerator/Generator/Login';
    return this.http.post<User>(loginPath, login, this.httpJSON);
  }
}
