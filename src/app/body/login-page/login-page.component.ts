import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service/auth-service.service';
import { PopupHandlerService } from 'src/app/services/popup-handler-service/popup-handler.service';
import { SupportServiceService } from 'src/app/services/support/support-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(public authService: AuthServiceService, public popupService:PopupHandlerService) { }

  ngOnInit(): void {
  }

showLoginPopup=true;

  login=true;
  signup=false;

  loginWithGoogle() {
    this.authService.googleSignIn();
  }

  changeToSignup(){
    this.login=false;
    this.signup=true;
  }
  changeToLogin(){
    this.login=true;
    this.signup=false;
  }

  closePopup(){
    this.popupService.loginPopup=false;
  }
}
