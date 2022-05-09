import { Component, OnInit, Output, ViewChild} from '@angular/core';
import { RegisterServiceService } from 'src/app/services/register-service/register-service.service';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service/auth-service.service';
import { PopupHandlerService } from 'src/app/services/popup-handler-service/popup-handler.service';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { AddressContactComponent } from './address-contact/address-contact.component';
import { CategoryUploadComponent } from './category-upload/category-upload.component';
import { NgForm } from '@angular/forms';
import { FileData} from 'src/app/Interfaces/FileInterface';
import { FileUploadService } from 'src/app/services/file-upload-service/file-upload-service.service';
import { UpdateRegistrationService } from 'src/app/services/update-registration/update-registration.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  
  token: string|undefined;
  
  uid:string;
  name='';
  dob='';
  photoUpload:FileData={FileUrl:'',ApplicantName:'',Date:'',Time:'',Uid:'',File:'Photo'};
  profileUpload:FileData={FileUrl:'',ApplicantName:'',Date:'',Time:'',Uid:'',File:'Profile'};
  userUid='';
  
  constructor( public registerService:RegisterServiceService, public router:Router, public authService:AuthServiceService, public popupService:PopupHandlerService, public fileUploadService:FileUploadService, public updateRegistration:UpdateRegistrationService) { 
    this.token = undefined;
  }
  
  ngOnInit(): void {
    console.log(this.authService.user)
    if (!this.authService.user) {
      this.popupService.registerNewApplicantEnables=true;
     }
  }
 
  @ViewChild(PersonalDetailsComponent) personalDetails: any;
  @ViewChild(AddressContactComponent) adressComponent:any;
  @ViewChild(CategoryUploadComponent) categoryComponent:any;
  
  
  onSubmit(event: Event){
    if (!this.authService.user) {
      this.popupService.registerNewApplicantEnables=true;
    }
    else
    {
       this.uid=this.authService.user.displayName
       console.log(this.personalDetails.firstName)
       console.log(this.adressComponent.country)
       this.photoUpload.FileUrl=this.fileUploadService.photoUrl
       this.photoUpload.ApplicantName=this.personalDetails.firstName+' '+this.personalDetails.lastName
       this.photoUpload.Date=this.fileUploadService.photoDate
       this.photoUpload.Time=this.fileUploadService.photoTime
       
       this.profileUpload.FileUrl=this.fileUploadService.profileUrl
       this.profileUpload.ApplicantName=this.personalDetails.firstName+' '+this.personalDetails.lastName
       this.profileUpload.Date=this.fileUploadService.profileDate
       this.profileUpload.Time=this.fileUploadService.profileTime
       this.userUid=this.authService.user.uid
       this.registerService.register(this.uid,this.personalDetails.dob,this.personalDetails.firstName,this.personalDetails.lastName,this.personalDetails.gaurdFirst,this.personalDetails.gaurdLast,this.adressComponent.address,this.adressComponent.zip,this.adressComponent.number,this.adressComponent.email,this.adressComponent.school, this.adressComponent.country, this.categoryComponent.category, this.categoryComponent.achievement, this.photoUpload, this.profileUpload, this.categoryComponent.social, this.userUid)
      }
  }

  public send(form: NgForm,event: Event): void {
    if (form.invalid) {
      for (const control of Object.keys(form.controls)) {
        form.controls[control].markAsTouched();
      }
      return;
    }
    this.onSubmit(event);
    console.debug(`Token [${this.token}] generated`);
  }
  
  
  
}
