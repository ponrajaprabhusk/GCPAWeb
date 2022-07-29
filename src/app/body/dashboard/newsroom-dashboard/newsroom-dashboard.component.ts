import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileUpload } from 'src/app/Interfaces/FileInterface';
import { Newsroom } from 'src/app/Interfaces/Newsroom';
import { AuthServiceService } from 'src/app/services/auth-service/auth-service.service';
import { FileUploadService } from 'src/app/services/file-upload-service/file-upload-service.service';
import { NewsServiceService } from 'src/app/services/newsroom/news-service.service';

@Component({
  selector: 'app-newsroom-dashboard',
  templateUrl: './newsroom-dashboard.component.html',
  styleUrls: ['./newsroom-dashboard.component.css']
})
export class NewsroomDashboardComponent implements OnInit {
  newNews=false;
  photoStatus:boolean=false;
  basePath: string;
  selectedFile: FileList;
  currentFileUpload: FileUpload;
  percentage: number = 0;
  fileName: string;
  progressPhoto:number;

  constructor(public uploadService:FileUploadService, public newsService:NewsServiceService,private router: Router,public authService:AuthServiceService) { }
  news:Newsroom={Uid:"",Name:"",Status:"",ImageUrl:"",Link:""}

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
 this.newsService.getnews()
  }

  showNewNews(){
    this.newNews=true;
  }

  photoUpload(event:any)
    {
      this.photoStatus=true;
        const file = event.target.files.item(0);
        const folderName="Newsroom"
    
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
   this.news.ImageUrl=this.uploadService.newsUrl;
   this.newsService.addNews(this.news);
  }
}
