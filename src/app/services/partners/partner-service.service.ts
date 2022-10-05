import { Injectable } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/compat/functions';
import { map } from 'rxjs';
import { FileData } from 'src/app/Interfaces/FileInterface';
import { Partners } from 'src/app/Interfaces/Partners';
import { AuthServiceService } from '../auth-service/auth-service.service';
import { UpdateRegistrationService } from '../update-registration/update-registration.service';

@Injectable({
  providedIn: 'root'
})
export class PartnerServiceService {

  partners:Partners[]=[]
  loader=true;

  constructor(public functions: AngularFireFunctions, public updateRegistration: UpdateRegistrationService , public authService:AuthServiceService) { }
  addPartner(partner:Partners)  {
    const callable = this.functions.httpsCallable('partners/addPartner');
        console.log("add partner");
        callable({ uid:partner.Uid, type:partner.Type, name:partner.Name, imageUrl:partner.ImageUrl }).subscribe({
          next: (data) => {
            console.log("partner Added");
      
          },
          error: (error) => {
            console.error("Error", error);
          },
          complete: (() =>{ 
            console.info('Successful')
            alert("file addition Success");
           
        })
    });
  }
  
  getPartners(){
    const callable = this.functions.httpsCallable("partners/getPartners");
    callable({ }).pipe(map(res=>{
      const data = res.data as Partners[];
      return data;
    })).subscribe({
      next: (data) => {
        this.partners = data;
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        console.info('Getting Partners successful')
        this.loader=false;
      }
    });
  }
}