import { Component, OnInit } from '@angular/core';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // private isLoggedIn = false;
  private test = '';
  private test1 = '';


  constructor(private authService: AuthService) { }


  ngOnInit() {
    this.isAuthenticated();


  }




  isAuthenticated() {
    this.authService.isAuthenticated().subscribe(
      result => {
        if (result === false) {
          console.log('not logged in');
            this.test = 'Login';
            this.test1 = 'login';

        } else {
          console.log('isloggdin');
            this.test = 'Logout';
            this.test1 = 'logout';

          }
      },
      error => {
        // console.log(error);
      }
    );
  }

}
