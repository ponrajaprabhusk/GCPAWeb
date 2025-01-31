import { Injectable } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/compat/functions';
import { map } from 'rxjs';
import { Support } from 'src/app/Interfaces/SupportInterfaces';
import { User } from 'src/app/Interfaces/UserInterface';
import { AuthServiceService } from '../auth-service/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class SupportServiceService {

  supports:Support[]=[];
  supportDetail:Support;
  support:Support;

  constructor(public functions: AngularFireFunctions, public authService:AuthServiceService) { }

  createNewSupport(support:Support){
    const callable = this.functions.httpsCallable('support/createNewSupport');
    support.UserUid = this.authService.user.uid;
    callable({ userUid:support.UserUid, name:support.Name, supportType:support.SupportType, message: support.Message, contactEmail:support.ContactEmail , date:support.Date, time:support.Time}).subscribe({
      next: (data) => {
        console.log("Support added");
      },
      error: (error) => {
        console.error("Error", error);
      },
    complete: () => console.info('Successful ')
});
  }

  getSupportList(){
    this.authService.afauth.user.subscribe({
      next:(user)=>{
        this.authService.setCurrentUser(user as User);
        const useruid = this.authService.user.uid;
    const callable = this.functions.httpsCallable("support/getSupportList");
    callable({UserUid: useruid }).pipe(map(res=>{
      const data = res.data as Support[];
      return data;
    })).subscribe({
      next: (data) => {
        this.supports = data;
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        console.info('Getting Support List Successfull')
      }
    });
      },
      error:(error)=>{
        console.error(error);
      },
      complete:()=>{
        console.log('User fetched');
       
      }
    })
    
  }

  getSupportById(ticketId:string){
    const callable = this.functions.httpsCallable("support/getSupportById");
    callable({ticketId: ticketId }).pipe(map(res=>{
      const data = res.data as Support;
      return data;
    })).subscribe({
      next: (data) => {
        this.support = data;
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        console.info('Getting Support List Successfull')
      }
    });
  }
}
