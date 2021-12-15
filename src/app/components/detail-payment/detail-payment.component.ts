import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentDetail } from 'src/app/models/PaymentDetail';
import { PaymentServiceServic } from 'src/app/services/payment-service.service';
@Component({
  selector: 'app-detail-payment',
  templateUrl: './detail-payment.component.html',
  styleUrls: ['./detail-payment.component.css']
})
export class DetailPaymentComponent implements OnInit {
  
  paymentDetails:PaymentDetail[] = []
  id: number
  constructor(public PaymentService: PaymentServiceServic, public router:Router, private actRoute: ActivatedRoute) { 
    this.id = actRoute.snapshot.params.id
  }

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this.PaymentService.getPaymentDetail().subscribe(res => {
      this.paymentDetails = res.items
    })
  }

  deletePaymentDetail(id:number){
    if(confirm(`Are you sure want to delete id: ${id} ?`))
    {
      this.PaymentService.deletePaymentDetail(id).subscribe((res) => {
        this.getData()
      })
    }
    
  }
}
