import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators';


@Injectable()
export class AuthService {

  private baseUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) { }


  public login(email, password) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    const body = {
      'Email': email,
      'Password': password
    };

    return this.http.post(this.baseUrl + '/auth/login', body, httpOptions)
    .pipe(
      catchError(this.handleError('authenticated', { token : null } ))
    );

  }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  public setToken(token): void {
    localStorage.setItem('token', token);
  }

  public isAuthenticated() {
    const token = this.getToken();
    return this.tokenNotExpired(token);
  }



  private tokenNotExpired(token) {
    console.log(token);
    const config = { headers:  {
            'Authorization': 'Bearer ' + token
        }
    };

    return this.http.get(this.baseUrl + '/token', config).pipe(catchError(this.handleError('authenticated', false)));
  }


  private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    // console.error(error); // log to console instead

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}


}
