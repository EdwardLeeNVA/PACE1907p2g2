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

  ngOnInit() {
  }

  submitLogin(){
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
  }
}

export interface Test {
  username: string;
  password: string;
}
