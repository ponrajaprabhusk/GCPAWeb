import { Injectable } from '@angular/core';
import { AuthServiceService } from '../auth-service/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class PopupHandlerService {

  registerNewApplicantEnables:boolean=false;
  loginPopup:boolean=false;

  constructor() { }
  
  
}
