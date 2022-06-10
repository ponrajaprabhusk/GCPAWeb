import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service/auth-service.service';
import { SupportServiceService } from 'src/app/services/support/support-service.service';
import { Support } from 'src/app/Interfaces/SupportInterfaces';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
name="";
contactEmail="";
message="";
userUid="";


constructor(public authService:AuthServiceService, public supportService:SupportServiceService) { }

ngOnInit(): void {
  }

submit(){

}

}
