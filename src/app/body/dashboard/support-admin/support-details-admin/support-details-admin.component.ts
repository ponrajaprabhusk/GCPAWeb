import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Activity } from 'src/app/Interfaces/ActivityInterface';
import { ActivityServiceService } from 'src/app/services/activity/activity-service.service';
import { SupportServiceService } from 'src/app/services/support/support-service.service';
import { ToolsService } from 'src/app/services/tool/tools.service';

@Component({
  selector: 'app-support-details-admin',
  templateUrl: './support-details-admin.component.html',
  styleUrls: ['./support-details-admin.component.css']
})
export class SupportDetailsAdminComponent implements OnInit {

  constructor(public supportService:SupportServiceService,public activityService:ActivityServiceService, public dateService:ToolsService,private route: ActivatedRoute) { }
  activities:Activity[]=[];
  
  activity:Activity={Message:"",TicketId:"",Date:"",Time:"",Sendor:"",ActId:""}
  messageSent=''
  ticketId:string
  
  ngOnInit(): void {
    this.ticketId = this.route.snapshot.params[ 'ticketId' ]
    this.supportService.getSupportById(this.ticketId)
    
    this.activityService.getActivityList(this.ticketId)
    this.activities=this.activityService.activities
  }

  sendMessage(ticketId:string){
    this.activity.Date=this.dateService.date();
    this.activity.Time=this.dateService.time();
    this.activity.Message=this.messageSent;
    this.activity.Sendor="admin";
    this.activity.TicketId=ticketId;
    this.activityService.createNewActivity(this.activity);  
    this.activityService.getActivityList(this.ticketId)
    this.messageSent="";
  }

  sendMail(){
    this.supportService.sendMail(this.ticketId)
  }
}
