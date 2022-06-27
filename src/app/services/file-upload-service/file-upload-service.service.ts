import { Injectable } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/compat/functions';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';
import { FileData, FileUpload } from 'src/app/Interfaces/FileInterface';
import { AuthServiceService } from '../auth-service/auth-service.service';
import { ToolsService } from '../tool/tools.service';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  public fileUploadStatus: boolean = false;
  taskId: string = "";

  photoUrl:string="";
  photoDate:string="";
  photoTime:string="";
  photoLastModified:number;

  profileUrl:string="";
  profileDate:string="";
  profileTime:string="";
  profileLastModified:number;

  partnerUrl:string="";
  testimonialUrl:string="";
  newsUrl:string="";
  galleryUrl:string="";
  ecommerceUrl:string[]=[];

  filesData: FileData[]

  constructor(private storage: AngularFireStorage, private functions: AngularFireFunctions,  private authService: AuthServiceService, private toolsService: ToolsService) { }

  pushFileToTaskStorage(fileUpload: FileUpload, basePath: string, folderName: string){
    console.log("service triggered")
    this.fileUploadStatus = true;
    const filePath = `${basePath}/${fileUpload.file.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, fileUpload.file);

    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
          fileUpload.url = downloadURL;
          fileUpload.name = fileUpload.file.name;
          this.saveFileData(fileUpload, basePath, folderName)
        });
      })  
    ).subscribe();
    
    return uploadTask.percentageChanges();
  }

   saveFileData(fileUpload: FileUpload, basePath: string, folderName: string) {

    console.log("save file triggerd")
    const todayDate = this.toolsService.date();
    const time = this.toolsService.time();
    const fileName = fileUpload.name;
    const lastModified = fileUpload.file.lastModified;

    if (folderName == "ApplicantPhoto") {
     this.photoUrl=fileUpload.url
     this.photoDate=todayDate
     this.photoTime=time
     this.photoLastModified=lastModified

    } else if (folderName == "ApplicantProfile") {
      this.profileUrl=fileUpload.url
     this.profileDate=todayDate
     this.profileTime=time
     this.profileLastModified=lastModified
    } else if(folderName=="Partners"){
      this.partnerUrl=fileUpload.url
      
    }else if(folderName=="Testimonial"){
      this.testimonialUrl=fileUpload.url
      
    }else if(folderName=="Newsroom"){
      this.newsUrl=fileUpload.url
      
    }else if(folderName=="Gallery"){
      this.galleryUrl=fileUpload.url
      
    }else if(folderName=="Ecommerce"){
      this.ecommerceUrl.push(fileUpload.url)
      console.log(this.ecommerceUrl)
    }
    
    this.fileUploadStatus = false;
  }
}
