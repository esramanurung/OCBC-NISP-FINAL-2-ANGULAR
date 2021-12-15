import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { PaymentServiceServic } from 'src/app/services/payment-service.service';
import { PaymentDetail } from 'src/app/models/PaymentDetail';
import { UpdateDetailPaymentComponent } from '../update-detail-payment/update-detail-payment.component';
import { DetailPaymentComponent } from '../detail-payment/detail-payment.component';
@Component({
  selector: 'app-add-detail-payment',
  templateUrl: './add-detail-payment.component.html',
  styleUrls: ['./add-detail-payment.component.css']
})
export class AddDetailPaymentComponent implements OnInit {

  errorsCardOwnerName= { cardOwnerName: {} }
  errorscardNumber= { cardNumber: {} }
  errorssecurityCode= { securityCode: {} }
  errorsexpirationDate= { expirationDate: {} }
  constructor(public PaymentService: PaymentServiceServic, private PaymentDetail: DetailPaymentComponent) { 
    
  }
  addPaymentForm = new FormGroup({
    cardOwnerName: new FormControl('',[Validators.required,Validators.minLength(5)]),
    cardNumber: new FormControl('',[Validators.required,Validators.minLength(5)]),
    expirationDate: new FormControl('',[Validators.required,Validators.minLength(5)]),
    securityCode: new FormControl('',[Validators.required,Validators.minLength(5)]),
  })

  get cardOwnerName(){
    return this.addPaymentForm.get('cardOwnerName')
  }
  get cardNumber(){
    return this.addPaymentForm.get('cardNumber')
  }
  get expirationDate(){
    return this.addPaymentForm.get('expirationDate')
  }
  get securityCode(){
    return this.addPaymentForm.get('securityCode')
  }
  addDetailPayment(){
    this.PaymentService.addPaymentDetail(this.addPaymentForm.value).subscribe((res)=>{
      if(res.result){
        
      }
      this.addPaymentForm.reset()
    })
  }

  validateForm(){
    if(this.cardOwnerName?.invalid ||
      this.cardNumber?.invalid ||
      this.securityCode?.invalid ||
      this.expirationDate?.invalid){
        this.errorsCardOwnerName.cardOwnerName = {...this.cardOwnerName?.errors}
        this.errorscardNumber.cardNumber = {...this.cardNumber?.errors}
        this.errorssecurityCode.securityCode = {...this.securityCode?.errors}
        this.errorsexpirationDate.expirationDate = {...this.expirationDate?.errors}
      } else {
        this.addDetailPayment();
        this.errorsCardOwnerName.cardOwnerName = {};
        this.errorscardNumber.cardNumber = {};
        this.errorssecurityCode.securityCode = {};
        this.errorsexpirationDate.expirationDate = {};
        this.isSubmitted = false;
      }
  }

  isSubmitted = false

  handlePaymentRegisterForm(){
    if(confirm(`Are you sure want to add ?`)){
      this.isSubmitted = true
      this.validateForm()
    }
  }

  handleIsSubmittedState () {
    if(this.isSubmitted == true){
      this.isSubmitted = false;
    }
  }

  ngOnInit(): void {
  }

}
