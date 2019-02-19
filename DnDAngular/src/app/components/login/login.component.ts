import {Component, Input, OnInit} from '@angular/core';
import {HttpDdService} from '../../services/http-dd.service';
import {User} from '../../models/user';
import {LoginService} from '../../services/login-service.service';
import {Router, RouterModule} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  outputs: ['loginStatus']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpDdService, private login: LoginService, private router: Router) { }

  // Used for user input
 user: User = {
    username: '',
    password: '',
    id: 0
  };

  // Used for active session User
  private currentUser: User;
  // Used to notify navbar of active session
  public loginStatus: boolean;

  public feedback: boolean;
  public feedbackText: string;

  ngOnInit() {
    this.login.currentLoginStatus.subscribe(status => this.loginStatus = status);
    this.login.currentLoginUser.subscribe(user => this.currentUser = user);

    if(this.loginStatus){
      this.router.navigate(['/create-character']);
    }
  }

  failedLogin(){
    this.feedbackText = 'Failed to login with credentials provided, try again or register new account.';
    this.feedback = true;
  }

  failedRegister(){
    this.feedbackText = 'Failed to register account with credentials provided, try again.';
    this.feedback = true;
  }

  successfulRegister(){
    this.feedbackText = 'Your account was registered.  Log in to access.';
    this.feedback = true;
  }

  submitLogin(){
    this.currentUser = null;
    this.http.verifyLogin(this.user).subscribe(
      user => this.verifyLogin(user),
      error => this.failedLogin(),
      () => console.log("Verify login completed.")
    );
  }

  verifyLogin(user: User){
    if(user.id > 0){
      this.user = user;
      this.login.updateCurrentUser(user);
      this.login.updateLoginStatus(true);
      this.feedback = false;
      this.router.navigate(['/create-character']);
    } else {
      this.login.updateLoginStatus(false);
      this.login.updateCurrentUser(null);
      this.failedLogin();
    }
  }

  verifyRegister(bool: boolean){
    if(bool){
      this.successfulRegister();
    } else {
      this.failedRegister();
    }
  }


  registerUser(){
    this.currentUser = null;
    this.http.registerUser(this.user).subscribe(
      bool => this.verifyRegister(bool),
      error => this.failedRegister(),
      () => console.log("Register User call completed.")
    );
  }


  /*submitLogin(): void{
    this.currentUser = null;
    const msg = JSON.stringify(this.user);
    const httpTest = new XMLHttpRequest();
    httpTest.onreadystatechange = () => {
      if((httpTest.readyState == 4) && (httpTest.status == 200)){
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
            this.router.navigate(['/create-character']);
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
        this.router.navigate(['/create-character']);
      }
    };
    httpTest.open("post", "/DnDGenerator/Generator/Login");
    httpTest.setRequestHeader("Content-Type", "application/json");
    httpTest.send(msg);
  }*/

  /*registerUser(){
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
            console.log("Register successful");
            this.successfulRegister();
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
  }*/
}

