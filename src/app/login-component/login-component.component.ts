import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent implements OnInit {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  model = {
    email: '',
    password: ''
  };
  serverErrorMessages: string;
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    debugger;
    this.loginService.verifyLoginCredentials().subscribe(user => {
      if (user.username === form.controls.email.value && user.password === form.controls.password.value) {
        const data = JSON.stringify(user);
        localStorage.setItem('authToken', data);
        this.router.navigate(['home']);
      } else {
        this.serverErrorMessages = 'username or password is not valid';
      }
    });
  }

}
