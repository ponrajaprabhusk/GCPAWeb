import { Injectable } from '@angular/core';
import { AuthServiceService } from '../auth-service/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class PopupHandlerService {

  registerNewApplicantEnables:boolean=false;

  constructor(public authService:AuthServiceService) { }
  
  popupEnable()
  {
    console.log(this.authService.userReady);
    if (this.authService.user) {
      this.registerNewApplicantEnables=false;
    }
    else
    this.registerNewApplicantEnables=true;
    console.log(this.registerNewApplicantEnables)
  }
}
