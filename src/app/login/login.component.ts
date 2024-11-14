import { Component } from '@angular/core';
import { User } from '../user-model';
import { LoginService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public user: User = {
    userName: 'Pieter@email.com',
    password: 'ThisIsAPassword',
  };
  public message: string = '';

  constructor(private loginService: LoginService) {}

  basicLogin() {
    this.loginService.basicLogin(this.user).subscribe(
      (result) => {
        console.log(result);
      },
      (err) => {
        console.error(err);
        this.message = err.error;
      }
    );
  }

  rsaLogin() {
    this.loginService.rsaLogin(this.user).subscribe(
      (result) => {
        console.log(result);
      },
      (err) => {
        console.error(err);
        this.message = err.error;
      }
    );
  }

  rsaAdvancedLogin() {
    this.loginService.rsaAdvancedLogin(this.user).subscribe(
      (result) => {
        console.log(result);
      },
      (err) => {
        console.error(err);
        this.message = err.error;
      }
    );
  }
}