import { Component, OnInit } from '@angular/core';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {

  }


  loginLink(): string {
    return this.authService.isLoggedIn() ? 'logout' : 'login';
  }

  loginText(): string {
    return this.authService.isLoggedIn() ? 'Logout' : 'Login';
  }

  showDashboard(): boolean {
    return this.authService.isLoggedIn();
  }

}
