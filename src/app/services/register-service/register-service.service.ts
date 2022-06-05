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


  constructor(public functions: AngularFireFunctions, public updateRegistration: UpdateRegistrationService , public authService:AuthServiceService, public router: Router) { }
  
  register(uid:string ,dob:string,firstName:string,lastName:string,gaurdFirst:string,gaurdLast:string, address:string, zip:string, number:string, email:string, school:string,  country:string,  category:string,  achievement:string,  photo:FileData,  profile:FileData, social:string, userUid:string)  {
    let registrationId: any;
    const callable = this.functions.httpsCallable('registrations/registerNewUser');
        console.log("register new user from ui");
        callable({ Uid: uid,Dob:dob,FirstName:firstName,LastName:lastName,GaurdFirst:gaurdFirst,GaurdLast:gaurdLast, Address:address, Zip:zip, Number:number, Email:email, School:school,  Country:country,  Category:category,  Achievement:achievement,  Photo:photo,  Profile:profile, Social:social,UserUid:userUid }).subscribe({
          next: (data) => {
            registrationId = data;
            console.log("Registration Part 1 Successful.");
            this.updateRegistration.updateregister(userUid);
          },
          error: (error) => {
            console.error("Error", error);
          },
        complete: (() =>{ 
          console.info('Successful')
          alert("Registration Success");
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
        console.log(data)
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        console.info('Getting Users Registrations successful')
      }
    });
  }


}

