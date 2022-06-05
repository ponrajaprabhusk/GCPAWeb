import { Component, OnInit } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/compat/functions';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment-status',
  templateUrl: './payment-status.component.html',
  styleUrls: ['./payment-status.component.css']
})
export class PaymentStatusComponent implements OnInit {

  orderId : string;
  paymentId : string;
  signature: string;
  paymentDone: boolean;
  registrationId: string;
  constructor(
    public route: ActivatedRoute,
    public functions: AngularFireFunctions,
    ) { }

  ngOnInit(): void {
    this.orderId = this.route.snapshot.params['orderId'];
    this.paymentId = this.route.snapshot.params['paymentId'];
    this.signature = this.route.snapshot.params['signature'];
    this.registrationId = this.route.snapshot.params['id'];
    this.verifyPayment();
  }

  verifyPayment(){
    const callable = this.functions.httpsCallable("payment/paymentVerification");
    callable({OrderId: this.orderId, PaymentId: this.paymentId, Signature: this.signature, Id: this.registrationId}).subscribe({ 
      next:(data)=>{
        this.paymentDone = true;
        console.log("PaymentStatus ", this.paymentDone);
      },
      error:(error)=>{
        this.paymentDone = false;
        console.log(error);
        console.log("PaymentStatus ", this.paymentDone);
      },
      complete:()=>{
        console.log("PaymentSuccess")
      }
    })
  }

}
