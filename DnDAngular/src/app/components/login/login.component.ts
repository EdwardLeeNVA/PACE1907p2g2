import {Component, Input, OnInit} from '@angular/core';
import {HttpDdService} from '../../services/http-dd.service';
import {User} from '../../models/user';
import {LoginService} from '../../services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  outputs: ['loginStatus']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpDdService, private login: LoginService) { }

  // Used for user input
 user: User = {
    username: '',
    password: '',
    id: 0
  }

  // Used for active session User
  private currentUser: User;
  // Used to notify navbar of active session
  public loginStatus: boolean;

  public feedback: boolean;
  public feedbackText: string;

  ngOnInit() {
    this.login.currentLoginStatus.subscribe(status => this.loginStatus = status);
    this.login.currentLoginUser.subscribe(user => this.currentUser = user);
  }

  failedLogin(){
    this.feedbackText = 'Failed to login with credentials provided, try again or register new account.';
    this.feedback = true;
  }

  failedRegister(){
    this.feedbackText = 'Failed to register account with credentials provided, try again.';
    this.feedback = true;

  }

  /*submitLogin(){
    this.currentUser = null;
    console.log("User sent to back-end "+this.user);
    this.http.verifyLogin(this.user).subscribe(
      user => this.currentUser,
      error => console.error("Verify login http call failed."),
      () => console.log("Verify login completed.")
    );
    if(this.currentUser != null) {
      if(this.user.username != ''){
        console.log("User received from back-end " + this.user);
        this.feedback = false;
        this.login.updateLoginStatus(true);
        this.login.updateCurrentUser(this.user);
      } else {
        this.failedLogin();
      }
    } else {
      console.log("Register failed.");
      this.failedRegister();
      this.login.updateLoginStatus(false);
      this.login.updateCurrentUser(null);
  }*/

  /*registerUser(){
    this.currentUser = null;
    console.log("User sent to register " + this.user);
    this.http.registerUser(this.user).subscribe(
      user => this.currentUser,
      error => console.error("Verify login http call failed."),
      () => console.log("Register User call completed.")
    );
    if(this.currentUser != null) {
      if(this.user.username != ''){
        console.log("User received from back-end " + this.user);
        this.feedback = false;
        this.login.updateLoginStatus(true);
        this.login.updateCurrentUser(this.user);
      } else {
        this.failedRegister();
      }
    }
  }*/


  submitLogin(): void{
    this.currentUser = null;
    const msg = JSON.stringify(this.user);
    const httpTest = new XMLHttpRequest();
    httpTest.onreadystatechange = () => {
      console.log(" " + httpTest.readyState);
      console.log("Status " + httpTest.status);
      if((httpTest.readyState == 4) && (httpTest.status == 200)){
        console.log("response: " + httpTest.responseText);
        if(httpTest.responseText != null){
          const resp = JSON.parse(httpTest.responseText);
          console.log("Login successful");
          this.currentUser = {
            username: resp.username,
            password: resp.password,
            id: resp.id
          }
          if(this.currentUser.id > 0) {
            this.login.updateCurrentUser(this.currentUser);
            this.login.updateLoginStatus(true);
          } else {
            this.failedLogin();
            console.log("Login failed.");
          }
        } else {
          console.log("Login failed.");
          this.failedLogin();
          this.login.updateLoginStatus(false);
          this.login.updateCurrentUser(null);
        }
      }
      if(httpTest.status == 404){
        console.log("Failed to reach request server.");
        this.login.updateCurrentUser(this.currentUser);
        this.login.updateLoginStatus(true);
      }
    };
    httpTest.open("post", "/DnDGenerator/Generator/Login");
    httpTest.setRequestHeader("Content-Type", "application/json");
    httpTest.send(msg);
  }

  registerUser(){
    this.currentUser = null;
    const msg = JSON.stringify(this.user);
    const httpTest = new XMLHttpRequest();
    httpTest.onreadystatechange = () => {
      console.log(" " + httpTest.readyState);
      if((httpTest.readyState == 4) && (httpTest.status == 200)){
        console.log("response: " + httpTest.responseText);
        if(httpTest.responseText != null){
          const resp = JSON.parse(httpTest.responseText);

          this.currentUser = {
            username: resp.username,
            password: resp.password,
            id: resp.id
          }
          if(this.currentUser.id > 0) {
            console.log("Login successful");
            this.login.updateCurrentUser(this.currentUser);
            this.login.updateLoginStatus(true);
          } else {
            this.failedRegister();
            console.log("Register failed.");
          }
        } else {
          console.log("Register failed.");
          this.failedRegister();
          this.login.updateLoginStatus(false);
          this.login.updateCurrentUser(null);
        }
      }
    };
    httpTest.open("post", "/DnDGenerator/Generator/Register");
    httpTest.setRequestHeader("Content-Type", "application/json");
    httpTest.send(msg);
  }
}
