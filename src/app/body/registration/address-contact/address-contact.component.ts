import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service/auth-service.service';
import { RegisterServiceService } from 'src/app/services/register-service/register-service.service';
import { CountryComponent } from './country/country.component';

@Component({
  selector: 'app-address-contact',
  templateUrl: './address-contact.component.html',
  styleUrls: ['./address-contact.component.css']
})
export class AddressContactComponent implements OnInit {

  address=''
  zip=''
  number=''
  email=''
  school=''
  country=''


  
  addCountry(newCountry: string) {
    this.country=newCountry;
  }
  
  
  constructor(public registerService:RegisterServiceService, public authService:AuthServiceService) { }
  
  ngOnInit(): void {
    this.email=this.authService.loggedInUser.Email
  }

}
