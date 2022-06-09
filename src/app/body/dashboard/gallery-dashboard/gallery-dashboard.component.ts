import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service/auth-service.service';
import { GalleryDashboardService } from 'src/app/services/gallery/gallery-dashboard.service';

@Component({
  selector: 'app-gallery-dashboard',
  templateUrl: './gallery-dashboard.component.html',
  styleUrls: ['./gallery-dashboard.component.css']
})
export class GalleryDashboardComponent implements OnInit {
  newPhoto=false;
  constructor(public galleryService:GalleryDashboardService,private router: Router,public authService:AuthServiceService) { }

  ngOnInit(): void {
    if (this.authService.user) {
      if (this.authService.loggedInUser.Admin===false) {
        this.router.navigate([''])
      }
    }
    else{
    // this.popupService.loginPopup=true
    this.router.navigate([''])
    }
this.galleryService.getphoto();
  }

  showNewPhoto(){
    this.newPhoto=true;
  }

}
