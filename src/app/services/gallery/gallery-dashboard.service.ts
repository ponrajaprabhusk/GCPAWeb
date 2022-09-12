import { Injectable } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/compat/functions';
import { map, Subject } from 'rxjs';
import { Photo } from 'src/app/Interfaces/Gallery';
import { Newsroom } from 'src/app/Interfaces/Newsroom';
import { AuthServiceService } from '../auth-service/auth-service.service';
import { UpdateRegistrationService } from '../update-registration/update-registration.service';

@Injectable({
  providedIn: 'root'
})
export class GalleryDashboardService {
  gallery:Photo[]=[]
  loader=true;
  private galleryDataState: Subject<boolean> = new Subject<boolean>();
public galleryDataStateObservable = this.galleryDataState.asObservable();

  constructor(public functions: AngularFireFunctions, public updateRegistration: UpdateRegistrationService , public authService:AuthServiceService) { }
  addPhoto(photo:Photo)  {
    const callable = this.functions.httpsCallable('gallery/addPhoto');
        console.log("add Photo");
        callable({ uid:photo.Uid, imageUrl:photo.ImageUrl, date:photo.Date , status:photo.Status}).subscribe({
          next: (data) => {
            console.log("Photo Added");
      
          },
          error: (error) => {
            console.error("Error", error);
          },
          complete: (() =>{ 
            console.info('Successful')
            alert("file addition Success");
           
        })
        
    });
  }
  
  getphoto(start: number, end: number){
    this.galleryDataState.next(false);
    const callable = this.functions.httpsCallable("gallery/getPhotoes");
    const GalleryData = callable({Start: start, End: end }).pipe(map(res=>{
    const data = res.data as Photo[];
    console.log(data);
    this.loader=false;
    this.gallery = data;
    return data;
  }));
  return GalleryData;
}
}
