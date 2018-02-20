import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators';
import * as moment from 'moment';


@Injectable()
export class AuthService {

  private baseUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) { }


  public login(email: string, password: string) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    const body = {
      'Email': email,
      'Password': password
    };

    return this.http.post(this.baseUrl + '/auth/login', body, httpOptions);
  }

  public setToken(bearer): void {
    const expiresAt = moment().add(bearer.expires_in, 'second');
    localStorage.setItem('token', bearer.token);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));

  }

  public isLoggedIn() {
    const expires = this.getExpiration();
    return moment().isAfter(expires);
  }

  public isLoggedOut() {
    return !this.isLoggedIn();
  }


  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('expires_at');
  }



  private tokenNotExpired(token) {
    const config = { headers:  {
            'Authorization': 'Bearer ' + token
        }
    };
    return this.http.get(this.baseUrl + '/token', config);
  }

  private getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }


}
