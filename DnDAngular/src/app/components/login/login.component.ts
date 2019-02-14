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
    user_id: 0
  }

  // Used for active session User
  private currentUser: User;
  // Used to notify navbar of active session
  public loginStatus: boolean;

  ngOnInit() {
  }

  /*submitLogin(){
    this.currentUser = null;
    console.log(this.user);
    this.http.verifyLogin(this.user).subscribe(
      user => this.currentUser,
      error => console.error("Verify login http call failed."),
      () => console.log("Verify login completed.")
    );
    if(this.currentUser != null) {
      this.loginStatus = true;
      this.login.updateLoginStatus(true);
    }
  }*/

  submitLogin(): void{
    this.currentUser = null;
    const msg = JSON.stringify(this.user);
    const httpTest = new XMLHttpRequest();
    httpTest.onreadystatechange = () => {
      console.log(" " + httpTest.readyState);
      if((httpTest.readyState == 4) && (httpTest.status == 200)){
        console.log("response: " + httpTest.responseText);
        if(httpTest.responseText != null){
          const resp = JSON.parse(httpTest.responseText);
          console.log("Login successful");
          this.currentUser = {
            username: resp.username,
            password: resp.password,
            user_id: resp.user_id
          }
          if(this.currentUser != null) {
            this.loginStatus = true;
            this.login.updateLoginStatus(true);
          }
        } else {
          console.log("Login failed.");
          this.loginStatus = false;
          this.login.updateLoginStatus(false);
          this.currentUser = null;
        }
      }
    };
    httpTest.open("post", "/Generator/Login");
    httpTest.setRequestHeader("Content-Type", "application/json");
    httpTest.send(msg);

    if(this.currentUser != null) {
      this.loginStatus = true;
      this.login.updateLoginStatus(true);
    }
  }
}

