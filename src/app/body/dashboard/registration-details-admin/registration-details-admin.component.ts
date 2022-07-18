import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExtraFilesServiceService } from 'src/app/services/extraFiles/extra-files-service.service';
import { FileUploadService } from 'src/app/services/file-upload-service/file-upload-service.service';
import { RegisterServiceService } from 'src/app/services/register-service/register-service.service';

@Component({
  selector: 'app-registration-details-admin',
  templateUrl: './registration-details-admin.component.html',
  styleUrls: ['./registration-details-admin.component.css']
})
export class RegistrationDetailsAdminComponent implements OnInit {

  uid:string;
  constructor(public extraFilesService:ExtraFilesServiceService, public uploadService:FileUploadService,private route: ActivatedRoute,public registerService:RegisterServiceService, public router:Router) { }

  ngOnInit(): void {
    
    this.uid = this.route.snapshot.params[ 'uid' ]
    this.registerService.getRegistrationById(this.uid)
    this.extraFilesService.getExtraFiles(this.uid);
  }
  loadeditRegistration(){
    this.router.navigate(['editRegistration',this.registerService.registration.Uid])
  }
}
