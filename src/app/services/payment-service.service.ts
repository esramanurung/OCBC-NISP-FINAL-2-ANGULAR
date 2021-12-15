import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { PaymentDetail } from '../models/PaymentDetail';
import { Observable, throwError } from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaymentServiceServic {
  endpoint:string = 'https://final-project-payment.herokuapp.com/'

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http:HttpClient) { }

  handleError (err: HttpErrorResponse) {
    console.log(err)
    if(err.status < 500)
      return throwError(err.error.errors)
    else
      return throwError(`Server-side error code: ${err.status}\nMessage: ${err.message}`)
  }

  addPaymentDetail(paydetail: PaymentDetail): Observable<any>{
    const api = `${this.endpoint}api/Payment`;
    return this.http.post(api, paydetail).pipe( catchError(this.handleError))
  }

  getPaymentDetail(): Observable<any>{
    const api = `${this.endpoint}api/Payment`;
    return this.http.get(api).pipe(
      map((res:any) => {
        return res || {}
        console.log(res)
      }), catchError(this.handleError)
     
    )
    
  }

  getPaymentDetailById(id:number): Observable<any>{
    const api = `${this.endpoint}api/Payment/${id}`;
    return this.http.get(api).pipe(
      map((res:any) => {
        return res || {}
      }), catchError(this.handleError)
    )
  }

  updatePaymentDetail(paydetail: PaymentDetail, id: number): Observable<any>{
    const api = `${this.endpoint}api/Payment/${id}`
    console.log(paydetail)
    return this.http.put(api, paydetail)
  }

  deletePaymentDetail(id:number): Observable<any>{
    const api = `${this.endpoint}api/Payment/${id}`;
    alert("Data telah dihapus")
    return this.http.delete(api, {
      headers: new HttpHeaders({ 'Content-type': 'application/json'})
    })
  }
}

  