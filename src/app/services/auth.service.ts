import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  urlAPI = environment.baseURL;
  isLoginFailed: boolean = false;

  constructor(private http: HttpClient, private router: Router) {
  }

  isAuthenticated(): Observable<boolean> {
    if (localStorage.getItem('access_token') != null) {
      return of(true);
    }
    else {
      return of(false);
    }
  }



  login(loginData: any): Observable<any> {
    debugger;
    //return this.http.post(this.urlAPI + 'Account/login', loginData);
    var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
    return this.http.post(this.urlAPI + 'Account/login', loginData, { headers: reqHeader }).pipe(
      map((res: any) => {
        debugger;
        localStorage.setItem('access_token', res.token);
        console.log(localStorage.getItem('access_token'));
        this.isLoginFailed = false;
        return res.token;
      }, err => {
        this.isLoginFailed = true;
        return loginData;
      })
    );
  }
}
