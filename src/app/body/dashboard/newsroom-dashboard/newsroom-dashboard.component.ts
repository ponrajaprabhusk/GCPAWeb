import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service/auth-service.service';
import { NewsServiceService } from 'src/app/services/newsroom/news-service.service';

@Component({
  selector: 'app-newsroom-dashboard',
  templateUrl: './newsroom-dashboard.component.html',
  styleUrls: ['./newsroom-dashboard.component.css']
})
export class NewsroomDashboardComponent implements OnInit {
  newNews=false;
  constructor(public newsService:NewsServiceService,private router: Router,public authService:AuthServiceService) { }

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
 this.newsService.getnews()
  }

  showNewNews(){
    this.newNews=true;
  }
}
