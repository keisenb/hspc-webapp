import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';

import { AuthService } from '../_services/auth.service';

import * as UIkit from 'uikit';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  loading = false;

  constructor(private authService: AuthService, private router: Router, private title: Title) { }

  ngOnInit() {
    this.isAuthenticated();
    this.title.setTitle( 'Judgr - Register' );

  }


  onSubmit(registerForm: NgForm) {
    const email = registerForm.controls['email'];
    const password = registerForm.controls['password'];
    const confirmPassword = registerForm.controls['confirmPassword'];
    // validate password and confirm password
    if (email.valid && password.valid && confirmPassword.valid) {
      if (password.value === confirmPassword.value) {
        this.register(email.value, password.value);
      } else {
        // todo respond to frontend
        console.log('passwords dont match');
      }
    }

  }

  register(email: string, password: string) {
    this.loading = true;

  }


  isAuthenticated() {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/dashboard']);
    }
  }

}
