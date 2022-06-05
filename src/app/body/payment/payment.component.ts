import { Component, NgZone, OnInit } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/compat/functions';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { Register } from 'src/app/Interfaces/RegistrationInterface';
import { AuthServiceService } from 'src/app/services/auth-service/auth-service.service';
import { NativeWindowsService } from 'src/app/services/nativeWindow/native-windows-service.service';
import { RegisterServiceService } from 'src/app/services/register-service/register-service.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  registrationId:string
  applicant:Register

  date: string
  infoPacket: any
  formData: any

  loader: boolean = false

  paymentStatus: string
  public rzp: any;

  public options: any = {
    key: '',
    name: 'Global Child Prodigy Awards',
    description: 'Apply for Global Child Prodigy Awards',
    image: "https://vintagehome.in/assets/logo.png",
    order_id: "",
    amount: 0,
    prefill: {
      name: '',
      contact: '',
      email: '', // add your email id
    },
    // callback_url: "",
    notes: {},
    theme: {
      color: '#977552'
    },
    handler: (res: any) => {
      const paymentId = res.razorpay_payment_id;
      const orderId = res.razorpay_order_id;
      const signature = res.razorpay_signature;
      this.zone.run(() => {
        this.router.navigate(["OrderStatus", orderId, paymentId, signature]);
      })
    },
    modal: {
      ondismiss: (() => {
        this.zone.run(() => {
          // add current page routing if payment fails
          this.router.navigate(["OrderStatus", "f", "f", "f"]);
        })
      }),

    }
  };

  constructor(
    public route: ActivatedRoute, 
    public registrationService: RegisterServiceService,
    private zone: NgZone,
    private functions: AngularFireFunctions,
    private router: Router,
    public authService: AuthServiceService,
    private winRef: NativeWindowsService,
    ) {}

  ngOnInit(): void {
this.registrationId = this.route.snapshot.params['registrationId'];
console.log(this.registrationId);
this.getRegistrationDetails(this.registrationId);
}

getRegistrationDetails(registrationId: string){
  const callable = this.functions.httpsCallable("registrations/getApplicant");
  callable({RegistrationId: registrationId}).pipe(map (res=>{
    console.log(res);
    const data = res as Register;
    return data;
  })).subscribe({ 
    next:(data)=>{
      this.applicant = data
      console.log(data);
    },
    error:(error)=>{
      console.log(error);
    },
    complete:()=>{
      console.log("Fetched Applicant Data Successfully")
    }
  })
}

initPay(): void {
  this.rzp = new this.winRef.nativeWindow.Razorpay(this.options);
  this.rzp.open();
}
setOrderWithRazor() {
  this.loader = true;
  const callable = this.functions.httpsCallable('payment/addPayment');
  callable({UserUid: this.authService.user.uid, Amount: "100"}).subscribe({ 
    next:(result)=>{
      console.log(result);
    this.authService.currentReceipt = result.receipt;
    console.log(this.authService.currentReceipt);
    this.options.order_id = result.id;
    this.options.amount = result.amount;
    this.options.key = result.key;
    this.options.prefill.name = this.applicant.FirstName;
    this.options.prefill.contact = this.applicant.Number;
    this.options.prefill.email = this.authService.user.email;
    },
    error:(error)=>{
      console.log(error);
    },
    complete:()=>{
      this.initPay()
    }
  })
}

}