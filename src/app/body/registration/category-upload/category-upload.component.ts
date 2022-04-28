import { Component, OnInit } from '@angular/core';
import { getStorage, ref, getDownloadURL, uploadBytesResumable} from "firebase/storage";
import { FileUploadService } from 'src/app/services/file-upload-service/file-upload-service.service';
import { FileData, FileUpload } from 'src/app/Interfaces/FileInterface';

@Component({
  selector: 'app-category-upload',
  templateUrl: './category-upload.component.html',
  styleUrls: ['./category-upload.component.css']
})
export class CategoryUploadComponent implements OnInit {

  category=''
  achievement=''
  photo=''
  profile=''
  social=''
  uploadPhoto:any
  uploadProfile:any
  progressProfile=0
  progressPhoto=0
  profileStatus=false
  photoStatus=false

   basePath: string;
   selectedFile: FileList;
   currentFileUpload: FileUpload;
   percentage: number = 0;
   fileName: string;

    
//   async photoUpload(event:any)
//   {
//     this.photoStatus=true;
//    const file:File=event.target.files[0];
  
//    const storage = getStorage();
//    const storageRef = ref(storage, file.name);
//    console.log(storageRef)

//    this.uploadPhoto = uploadBytesResumable(storageRef, file)

//   this.uploadPhoto.on('state_changed', 
//   (snapshot: { bytesTransferred: number; totalBytes: number; }) => {
//    this.progressPhoto = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//     console.log(this.progressPhoto);
//   },
//   (error:any) => {
//     console.log(error)
//   }, 
//   () => {
//     getDownloadURL(this.uploadPhoto.snapshot.ref).then((downloadURL) => {
//       console.log('File available at', downloadURL);
//       this.photo=downloadURL;
//       this.photoStatus=false;
//     });
//   }
// )
 
// }

 photoUpload(event:any)
{
  this.photoStatus=true;
    const file = event.target.files.item(0);
    const folderName="ApplicantPhoto"

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
      }
      }
    );
}

 profileUpload(event:any)
  {
    this.profileStatus=true;
    const file = event.target.files.item(0);
    const folderName="ApplicantProfile"

    this.currentFileUpload = new FileUpload(file);
    this.fileName = this.currentFileUpload.file.name;
    this.basePath='Profile'

    this.uploadService.pushFileToTaskStorage(this.currentFileUpload, this.basePath, folderName)
    .subscribe({
      next: (percentage) =>{
        if(percentage)
        this.progressProfile = Math.round(percentage);
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        console.log("Getting Percentage Data Complete")
      }
      }
    );
    
}






  constructor(public uploadService:FileUploadService) { 
  }


  ngOnInit(): void {
  }

}
