import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from 'src/app/Interfaces/RegistrationInterface';
import { AuthServiceService } from 'src/app/services/auth-service/auth-service.service';
import { DataTableServiceService } from 'src/app/services/dataTable/data-table-service.service';
import { PopupHandlerService } from 'src/app/services/popup-handler-service/popup-handler.service';

@Component({
  selector: 'app-registration-dashboard',
  templateUrl: './registration-dashboard.component.html',
  styleUrls: ['./registration-dashboard.component.css']
})
export class RegistrationDashboardComponent implements OnInit {


  registrationData:Register[];
  displayColoumnsRegistration:string[];
  showRegistrations:boolean=false;

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
    this.getRegistrationsData()
  }
  getRegistrationsData() {
    this.dataTableService.getRegistrationsData().subscribe((data) => {
      if(data.length) {
        this.registrationData = data;
        this.displayColoumnsRegistration = ['Uid', 'FirstName', 'LastName','Dob', 'PaymentStatus'];
        this.showRegistrations=true;
      } 
    }); 
  }
}
