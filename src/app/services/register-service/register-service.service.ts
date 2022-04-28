import { Injectable } from '@angular/core';
// import { Register } from 'src/app/Interfaces/RegistrationInterface';
import { AngularFireFunctions } from '@angular/fire/compat/functions';
import { FileData } from 'src/app/Interfaces/FileInterface';
@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  // registerUser!: Register;

  constructor(public functions: AngularFireFunctions) { }
  
  async register(uid:string ,dob:string,firstName:string,lastName:string,gaurdFirst:string,gaurdLast:string, address:string, zip:string, number:string, email:string, school:string,  country:string,  category:string,  achievement:string,  photo:FileData,  profile:FileData, social:string)  {
    const callable = this.functions.httpsCallable('users/registerNewUser');
        console.log("register new user from ui");
        callable({ Uid: uid,Dob:dob,FirstName:firstName,LastName:lastName,GaurdFirst:gaurdFirst,GaurdLast:gaurdLast, Address:address, Zip:zip, Number:number, Email:email, School:school,  Country:country,  Category:category,  Achievement:achievement,  Photo:photo,  Profile:profile, Social:social }).subscribe({
          next: (data) => {
            console.log("Successful ");
          },
          error: (error) => {
            console.error("Error", error);
          },
        complete: () => console.info('Successful ')
    });
  }

}
