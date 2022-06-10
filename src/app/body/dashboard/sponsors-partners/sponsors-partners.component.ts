import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service/auth-service.service';
import { PartnerServiceService } from 'src/app/services/partners/partner-service.service';

@Component({
  selector: 'app-sponsors-partners',
  templateUrl: './sponsors-partners.component.html',
  styleUrls: ['./sponsors-partners.component.css']
})
export class SponsorsPartnersComponent implements OnInit {
newPartner=false;
  constructor(public partnerService:PartnerServiceService,private router: Router,public authService:AuthServiceService) { }

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
this.partnerService.getPartners();
  }

  showNewPartner(){
    this.newPartner=true;
  }

}
