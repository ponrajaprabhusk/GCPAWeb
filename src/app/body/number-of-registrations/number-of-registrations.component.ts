import { Component, OnInit } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/compat/functions';
import { AuthServiceService } from 'src/app/services/auth-service/auth-service.service';
import { Register } from 'src/app/Interfaces/RegistrationInterface';
import { RegisterServiceService } from 'src/app/services/register-service/register-service.service';
import { DataTableServiceService } from 'src/app/services/dataTable/data-table-service.service';

@Component({
  selector: 'app-number-of-registrations',
  templateUrl: './number-of-registrations.component.html',
  styleUrls: ['./number-of-registrations.component.css']
})
export class NumberOfRegistrationsComponent implements OnInit {

  constructor(public authService: AuthServiceService, public functions: AngularFireFunctions, public registerService:RegisterServiceService, public dataTableService:DataTableServiceService) { }

  registrationsData:Register[];
  displayColoumns:string[]=[];
  showLoader: boolean = false;
  noData: boolean = false;

  
  ngOnInit(){
    console.log(this.authService.user.uid)
    this.dataTableService.getRegistrations().subscribe((data) => {
      if(data.length) {
        this.registrationsData = data;
        this.displayColoumns = ['Uid', 'FirstName', 'Dob', 'LastName'];
        this.showLoader = false;
        this.noData = false;
      } else {
        this.showLoader = false;
        this.noData = true;
      }
    }); 
  }

  

}
