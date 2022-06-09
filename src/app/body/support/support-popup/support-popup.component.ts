import { Component, OnInit } from '@angular/core';
import { Support } from 'src/app/Interfaces/SupportInterfaces';
import { SupportServiceService } from 'src/app/services/support/support-service.service';
import { ToolsService } from 'src/app/services/tool/tools.service';

@Component({
  selector: 'app-support-popup',
  templateUrl: './support-popup.component.html',
  styleUrls: ['./support-popup.component.css']
})
export class SupportPopupComponent implements OnInit {

showSupportPopup=false;
  name=''
  contactEmail=''
  supportType='Support Type'
  message=''
  support:Support={UserUid:"",Name:"",SupportType:"",Message:"",ContactEmail:"",TicketId:"", NumberOfActivity:0,Date:"", Time:"",Show:false}
  
  constructor(public dateService:ToolsService, public supportService:SupportServiceService) { }

  ngOnInit(): void {
    
  }
  submit(){
    this.showSupportPopup=false;
    this.support.ContactEmail=this.contactEmail
    this.support.Message=this.message
    this.support.Name=this.name
    this.support.SupportType=this.supportType
    this.support.UserUid='';
    this.support.Date=this.dateService.date();
    this.support.Time=this.dateService.time();
    this.supportService.createNewSupport(this.support);
    
  }
  closePopup(){
    this.showSupportPopup=false;
  }
}
