import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Interfaces/UserInterface';
import { AuthServiceService } from '../services/auth-service/auth-service.service';
import { PopupHandlerService } from '../services/popup-handler-service/popup-handler.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggedIn:boolean=false;

  constructor(private router: Router, private authService:AuthServiceService, private popup:PopupHandlerService) { }

  ngOnInit(): void {
    console.log(this.authService.afauth.user)
    this.authService.afauth.user.subscribe({
      next:(user)=>{
        this.authService.setCurrentUser(user as User);
        if (user) {
          this.loggedIn=true;
        }
        this.popup.popupEnable()
      },
      error:(error)=>{
        console.error(error);
      },
      complete:()=>{
        console.log('User fetched');
      }
    })
  }

  loadLoginPage() {
    this.router.navigate(['/LoginPage']);
  }

  loadRegistration(){
    this.router.navigate(['/Registration']);
  }
}
