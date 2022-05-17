import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service/auth-service.service';
import { PopupHandlerService } from 'src/app/services/popup-handler-service/popup-handler.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  constructor(public authService:AuthServiceService, public popupService:PopupHandlerService) { }

  ngOnInit(): void {
  }
  
  openPopup() {
    this.popupService.registerNewApplicantEnables=true;
  }
  closePopup() {
    this.popupService.registerNewApplicantEnables=false;
  }

  loginWithGoogle() {
    this.authService.googleSignIn();
  }
}
