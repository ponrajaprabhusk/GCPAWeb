import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileUpload } from 'src/app/Interfaces/FileInterface';
import { Partners } from 'src/app/Interfaces/Partners';
import { AuthServiceService } from 'src/app/services/auth-service/auth-service.service';
import { FileUploadService } from 'src/app/services/file-upload-service/file-upload-service.service';
import { PartnerServiceService } from 'src/app/services/partners/partner-service.service';

@Component({
  selector: 'app-new-partner',
  templateUrl: './new-partner.component.html',
  styleUrls: ['./new-partner.component.css']
})
export class NewPartnerComponent implements OnInit {
photoStatus:boolean=false;
basePath: string;
selectedFile: FileList;
currentFileUpload: FileUpload;
percentage: number = 0;
fileName: string;
progressPhoto:number;

  constructor(public uploadService:FileUploadService, public partnerService:PartnerServiceService,private router: Router,public authService:AuthServiceService) { }

  partner:Partners={Uid:"",Name:"",Type:"",ImageUrl:""}
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
  }

  photoUpload(event:any)
  {
    this.photoStatus=true;
      const file = event.target.files.item(0);
      const folderName="Partners"
  
      this.currentFileUpload = new FileUpload(file);
      this.fileName = this.currentFileUpload.file.name;
      this.basePath='Photo'
  
      this.uploadService.pushFileToTaskStorage(this.currentFileUpload, this.basePath, folderName)
      .subscribe({
        next: (percentage) =>{
          if(percentage)
          this.progressPhoto = Math.round(percentage);
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => {
          console.log("Getting Percentage Data Complete")
          this.photoStatus=false;
         
        }
        }
      );
  }

submit(){
 this.partner.ImageUrl=this.uploadService.partnerUrl;
 this.partnerService.addPartner(this.partner);
}
}
