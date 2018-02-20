import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';


import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private result;
  loading = false;


  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute, private titleService: Title) { }

  returnUrl: string;

  ngOnInit() {
    this.titleService.setTitle( 'Judgr - Login' );
    this.isAuthenticated();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';

  }

  login(): void {
    this.loading = true;

    const email = 'test@test.com';
    const password = 'Password123!';

    this.authService.login(email, password).subscribe(
      res => {
        this.authService.setToken(res);
        this.router.navigateByUrl(this.returnUrl);
      });
  }

  isAuthenticated() {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/dashboard']);
    }

  }

}
