import { Injectable } from '@angular/core';
import { Register } from 'src/app/Interfaces/RegistrationInterface';
import { AngularFireFunctions } from '@angular/fire/compat/functions';
import { FileData } from 'src/app/Interfaces/FileInterface';
import { AuthServiceService } from '../auth-service/auth-service.service';
import { UpdateRegistrationService } from '../update-registration/update-registration.service';
import { map } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { data } from 'jquery';
import { app } from 'firebase-admin';


@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  // registerUser!: Register;
  registrations:Register[]=[];
  applicant: Register;
  registration:Register;
  disableSubmit=false;
  amountPaid:number=0;
  invalidEmail=false;
  invalidNumber=false;
  fillAll=false;



  constructor(public functions: AngularFireFunctions, public updateRegistration: UpdateRegistrationService , public authService:AuthServiceService, public router: Router) { }
  
  register(uid:string ,prefix:string,dob:string,firstName:string,lastName:string,gaurdFirst:string,gaurdLast:string, address:string, zip:string, number:string, email:string, school:string,  country:string,  category:string,  achievement:string,  photo:FileData,  profile:FileData, social:string, userUid:string, emailupdate:boolean)  {
let registrationId: any;
this.disableSubmit=true;
    const callable = this.functions.httpsCallable('registrations/registerNewUser');
        callable({ Uid: uid,Prefix:prefix,Dob:dob,FirstName:firstName,LastName:lastName,GaurdFirst:gaurdFirst,GaurdLast:gaurdLast, Address:address, Zip:zip, Number:number, Email:email, School:school,  Country:country,  Category:category,  Achievement:achievement,  Photo:photo,  Profile:profile, Social:social,UserUid:userUid, EmailUpdates:emailupdate }).subscribe({
          next: (data) => {
            registrationId = data;
            this.updateRegistration.updateregister(userUid);
          },
          error: (error) => {
            console.error("Error", error);
            this.disableSubmit=false;
          },
        complete: (() =>{ 
          console.info('Successful')
          this.disableSubmit=false;
          console.log(registrationId)
          this.router.navigate(['payment/', registrationId]);
      })
    });
  }

  getRegistrations(){
    const useruid = this.authService.user.uid;

    const callable = this.functions.httpsCallable("readData/getUsersRegistrations");
    callable({UserUid: useruid }).pipe(map(res=>{
      const data = res.data as Register[];
      return data;
    })).subscribe({
      next: (data) => {
        this.registrations = data;
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        console.info('Getting Users Registrations successful')
      }
    });
  }

  getRegistrationById(uid:string){
    const callable = this.functions.httpsCallable('registrations/getRegistrationById');
    callable({ uid: uid}).subscribe({
      next: (data) => {
        console.log("Registration fetched");
        this.registration=data.data;
        if(data.data.RazorPayOrderDetails.amount)
        this.amountPaid=data.data.RazorPayOrderDetails.amount;
      },
      error: (error) => {
        console.error("Error", error);
      },
    complete: () => console.info('Successful')
});
  }
  updateRegistrationById(){
    const callable = this.functions.httpsCallable('registrations/updateRegistrationById');
    console.log("get registration using uid");
    callable({ uid: this.registration.Uid,prefix:this.registration.Prefix,dob:this.registration.Dob,firstName:this.registration.FirstName,lastName:this.registration.LastName,gaurdFirst:this.registration.GaurdFirst,gaurdLast:this.registration.GaurdLast, address:this.registration.Address, zip:this.registration.Zip, number:this.registration.Number, email:this.registration.Email, school:this.registration.School,  country:this.registration.Country,  category:this.registration.Category,  achievement:this.registration.Achievement,  social:this.registration.Social,userUid:this.registration.UserUid }).subscribe({
      next: () => {
        console.log("Registration updated");
        
      },
      error: (error) => {
        console.error("Error", error);
      },
    complete: () => {
      console.info('Successful')
      alert("form updated")
    }
});
  }

}

