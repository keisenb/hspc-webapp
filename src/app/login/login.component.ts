import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';


import { AuthService } from '../_services/auth.service';

import * as UIkit from 'uikit';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private result;
  loading = false;


  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private titleService: Title
  ) { }

  returnUrl: string;

  ngOnInit() {

    this.titleService.setTitle( 'Judgr - Login' );
    this.isAuthenticated();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';

  }

  onSubmit(loginForm: NgForm) {
    const email = loginForm.controls['email'];
    const password = loginForm.controls['password'];

    if (email.valid && password.valid) {
      this.login(email.value, password.value);
    }

  }

  login(email: string, password: string): void {
    this.loading = true;

    this.authService.login(email, password).subscribe(
      res => {
        this.authService.setToken(res);
        this.router.navigateByUrl(this.returnUrl);
        UIkit.notification(
          {
            message: '<i class="fas fa-check-circle"></i> ' + 'Successfully logged in!',
            status: 'success',
            timeout: 3000
          }
        );

      },
      err => {
        if (err.status === 401) {
          UIkit.notification(
            {
              message: '<i class="fas fa-exclamation-circle"></i> ' + 'Invalid username or password',
              status: 'danger',
              timeout: '3000'
            }
          );
        } else {
          UIkit.notification(
            {
              message: '<span uk-icon=' + 'icon: question-mark' + '></span>' + 'Unknown error!',
              status: 'danger',
              timeout: '3000'
            }
          );
        }

        this.loading = false;
      });
  }

  isAuthenticated() {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/dashboard']);
    }
  }
}
