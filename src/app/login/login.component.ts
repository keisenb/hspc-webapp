import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private result;
  loading = false;


  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.isAuthenticated();

  }

  login(): void {
    let err = null;
    this.loading = true;

    const email = 'test@test.com';
    const password = 'Password123!';

    this.authService.login(email, password).subscribe(
      result => {

        if (result === null) {
          console.log('error logging in');
          this.loading = false;
        } else {
          const res: any = result;
          this.authService.setToken(res.token);
          this.router.navigate(['/dashboard']);
        }

      },
      error => {
        console.log(error), err = error, this.loading = false;
      });
  }

  isAuthenticated() {
    this.loading = true;
    this.authService.isAuthenticated().subscribe(
      result => {
        if (result === false) {
          this.loading = false;
        } else {
          this.router.navigate(['/dashboard']);
        }
      },
      error => {
        console.log(error);
        this.loading = false;
      }
    );
  }

}
