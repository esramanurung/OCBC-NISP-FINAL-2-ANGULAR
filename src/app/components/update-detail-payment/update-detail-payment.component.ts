import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentDetail } from 'src/app/models/PaymentDetail';
import { PaymentServiceServic } from 'src/app/services/payment-service.service';

@Component({
  selector: 'app-update-detail-payment',
  templateUrl: './update-detail-payment.component.html',
  styleUrls: ['./update-detail-payment.component.css']
})
export class UpdateDetailPaymentComponent implements OnInit {

  
  pageid:number=0
  selectedPayment:PaymentDetail ={paymentDetailId:0,cardOwnerName:'',cardNumber:'',expirationDate:'',securityCode:''}
  constructor(
    private paymentService:PaymentServiceServic,
    private router:Router,
    private activatedRoute:ActivatedRoute
  ) {
    this.pageid = this.activatedRoute.snapshot.params.id
  }

  updatePaymentForm = new FormGroup({
    paymentDetailId:new FormControl(),
    cardOwnerName: new FormControl('',[Validators.required,Validators.minLength(5)]),
    cardNumber: new FormControl('',[Validators.required,Validators.minLength(5)]),
    expirationDate: new FormControl('',[Validators.required,Validators.minLength(5)]),
    securityCode: new FormControl(''),
  })

  
  get paymentDetailId(){
    return this.updatePaymentForm.get('paymentDetailId')
  }
  get cardOwnerName(){
    return this.updatePaymentForm.get('cardOwnerName')
  }
  get cardNumber(){
    return this.updatePaymentForm.get('cardNumber')
  }
  get expirationDate(){
    return this.updatePaymentForm.get('expirationDate')
  }
  get securityCode(){
    return this.updatePaymentForm.get('securityCode')
  }

  getSelectedPayment(id:number=this.pageid){
    this.paymentService
    .getPaymentDetailById(id)
    .subscribe(data => {
      console.log(data)
      this.selectedPayment=data
      this.paymentDetailId?.setValue(data.itemData.paymentDetailId)
      this.cardOwnerName?.setValue(data.itemData.cardOwnerName)
      this.cardNumber?.setValue(data.itemData.cardNumber)
      this.expirationDate?.setValue(data.itemData.expirationDate)
      this.securityCode?.setValue(data.itemData.securityCode)
    })
  }
  
  updatePayment(id:number=this.pageid){    
    this.paymentService.updatePaymentDetail(this.updatePaymentForm.value,id).subscribe((res)=>{
      if(res.result){
      }
      this.updatePaymentForm.reset()
      this.router.navigate(['/home'])
    })
  }

  ngOnInit(): void {
    this.getSelectedPayment()
    console.log(this.pageid)
  }
}
