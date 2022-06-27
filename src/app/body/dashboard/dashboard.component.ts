import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RawData } from 'src/app/Interfaces/RawData';
import { Register } from 'src/app/Interfaces/RegistrationInterface';
import { User, UserFetched } from 'src/app/Interfaces/UserInterface';
import { AuthServiceService } from 'src/app/services/auth-service/auth-service.service';
import { DataTableServiceService } from 'src/app/services/dataTable/data-table-service.service';
import { PopupHandlerService } from 'src/app/services/popup-handler-service/popup-handler.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  rawData:RawData[]=[]
  displayColoumns:string[];
  userData:UserFetched[]=[]
  displayColoumnsUser:string[];
  registrationData:Register[];
  displayColoumnsRegistration:string[];
  showRawData=false;
  showUserData=false;
  showRegistrationData=false;
  constructor(public dataTableService: DataTableServiceService, private router: Router,public authService:AuthServiceService, public popupService: PopupHandlerService) { }

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

    this.getRawData()
    
  }
  getRawData() {
    this.dataTableService.getRawData().subscribe((data) => {
      if(data.length) {
        this.rawData = data;
        this.displayColoumns = ['NumberOfUsers', 'NumberOfRegistrations', 'NumberOfSupport'];
      } 
    }); 
  }
  

  displayrawData(){
    this.showUserData=false;
    this.showRegistrationData=false;
    this.showRawData=true;
  }
  displayUserData(){
   this.router.navigate(['usersDashboard'])
  }
  displayRegistrationData(){
    this.router.navigate(['registrationDashboard'])
  }

  partnersSponsors(){
    this.router.navigate(['sponsorspartners']);
  }
  testimonials(){
    this.router.navigate(['testimonialsDashboard']);
  }
  newsroom(){
    this.router.navigate(['newsroomDashboard']);
  }
  gallery(){
    this.router.navigate(['galleryDashboard']);
  }
  ecommerce(){
    this.router.navigate(['ecommerceDashboard']);
  }
}

