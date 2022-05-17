import { Component, OnInit, ViewChild } from '@angular/core';
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
  
  
  constructor() { }
  
  ngOnInit(): void {
    
  }

}
