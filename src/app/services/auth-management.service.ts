import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { User } from '../models/User';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthManagementService {

  endpoint: string = 'https://final-project-payment.herokuapp.com/api/AuthManagement'
  headers = new HttpHeaders().set('Content-Type', 'application/json')
  jwtToken: string = ''
  jwtRefreshToken: string = ''

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  //  add user
  addUser(user: User): Observable<any> {
    console.log(user)
    let api = `${this.endpoint}/Register`;
    return this.http
      .post(api, user)

  }

  //  Login
  loginUser(user: User) {
    console.log(user)
    let api = `${this.endpoint}/Login`;
    return this.http
      .post<any>(api, user)
      .subscribe((res: any) => {
        console.log(res)
        // assign jwt to variable
        this.jwtToken = res.result.token
        this.jwtRefreshToken = res.result.refreshToken
        console.log(this.jwtToken)
        console.log(this.jwtRefreshToken)
        this.router.navigate(['/home'])
      })
  }

  // get token
  getToken() {
    return { token: this.jwtToken, refreshToken: this.jwtRefreshToken }
  }

  // check status login
  get isLoggedIn(): boolean {
    return (this.jwtToken !== '') ? true : false
  }

  // errorHandler
  errorHandler(err: HttpErrorResponse) {
    console.log(err)
    if (err.status < 500)
      return throwError(err.error.errors)
    else
      return throwError(`Server-side error code: ${err.status}\nMessage: ${err.message}`)
  }

}
