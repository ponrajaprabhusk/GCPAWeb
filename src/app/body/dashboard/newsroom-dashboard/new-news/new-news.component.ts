import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileUpload } from 'src/app/Interfaces/FileInterface';
import { Newsroom } from 'src/app/Interfaces/Newsroom';
import { Testimonial } from 'src/app/Interfaces/Testimonials';
import { AuthServiceService } from 'src/app/services/auth-service/auth-service.service';
import { FileUploadService } from 'src/app/services/file-upload-service/file-upload-service.service';
import { NewsServiceService } from 'src/app/services/newsroom/news-service.service';
import { TestimonialsServiceService } from 'src/app/services/testimonials/testimonials-service.service';

@Component({
  selector: 'app-new-news',
  templateUrl: './new-news.component.html',
  styleUrls: ['./new-news.component.css']
})
export class NewNewsComponent implements OnInit {
  photoStatus:boolean=false;
  basePath: string;
  selectedFile: FileList;
  currentFileUpload: FileUpload;
  percentage: number = 0;
  fileName: string;
  progressPhoto:number;
  
    constructor(public uploadService:FileUploadService, public newsservice:NewsServiceService,private router: Router,public authService:AuthServiceService) { }
  
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
   this.newsservice.addNews(this.news);
  }
}
