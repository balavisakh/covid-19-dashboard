import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginFormData = [];
  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  constructor(private route: Router, private fb: FormBuilder) {}

  loginformGroup = this.fb.group({
    username: this.username,
    password: this.password,
  });
  ngOnInit(): void {}

  login() {
      this.loginFormData = this.loginformGroup.value;
      if (
        this.loginformGroup.value.username === 'fingent' &&
        this.loginformGroup.value.password === 'fingent'
      ) {
        console.log(this.loginFormData);
        localStorage.setItem("username",this.loginformGroup.value.username);
        this.route.navigate(['dashboard/home']);
      }
     else {
      alert("Incorrect username or password");
      return;
    }
  }

  usernameErrorMessage() {
    if (this.username.hasError('required')) {
      return 'You must enter a username';
    }
  }

  passwordErrorMessage() {
    if (this.password.hasError('required')) {
      return 'You must enter a password';
    }
  }
}
