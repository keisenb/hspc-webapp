import { Injectable } from '@angular/core';
import { Request, XHRBackend, RequestOptions, Response, Http, RequestOptionsArgs, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import * as UIkit from 'uikit';


@Injectable()
export class HttpService extends Http {

  constructor(backend: XHRBackend, defaultOptions: RequestOptions, private router: Router) {
    super(backend, defaultOptions);
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    // do whatever
    if (typeof url === 'string') {
      if (!options) {
        options = { headers: new Headers() };
      }
      this.setHeaders(options);
    } else {
      this.setHeaders(url);
    }
    return super.request(url, options).catch(this.catchErrors());
  }

  private catchErrors() {
    return (res: Response) => {
      if (res.status === 401 || res.status === 403) {
        UIkit.notification(
          {
            message: '<i class="fas fa-exclamation-circle"></i> ' + 'Please login to continue.',
            status: 'danger',
            timeout: '3000'
          }
        );
        this.router.navigate(['login'], { queryParams: { returnUrl: this.router.url }});
      }
      if (res.status === 500) {
        this.router.navigate(['error']);
        console.log('error');
      }
      return Observable.throw(res);
    };
  }

  private setHeaders(objectToSetHeadersTo: Request | RequestOptionsArgs) {
    objectToSetHeadersTo.headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
  }
}
