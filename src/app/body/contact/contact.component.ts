import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service/auth-service.service';
import { SupportServiceService } from 'src/app/services/support/support-service.service';
import { Support } from 'src/app/Interfaces/SupportInterfaces';
import { AngularFireFunctions } from '@angular/fire/compat/functions';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
name="";
contactEmail="";
message="";
userUid="";


constructor(public authService:AuthServiceService, public supportService:SupportServiceService, public functions: AngularFireFunctions) { }

ngOnInit(): void {
  this.userUid = this.authService.user.uid;   
  console.log(this.authService.userReady);
  console.log("klnfgakjsenefkjanekjfnaekfnjlaerbf");
  
  
  }

submit(){
  const callable = this.functions.httpsCallable('support/sendMail');
  
  callable({Name : this.name, Email: this.contactEmail, Message: this.message, Uid: this.userUid}).subscribe({
    next: (data) => {
      console.log("Request Send Successfully");
    },
    error: (error) => {
      console.error(error);
    },
    complete: () => { 
      alert("Request Send Successfully, Our team will Contact You shortly!");
      this.name ="";
      this.contactEmail = "";
      this.message = "";
    }
  });
}

}
