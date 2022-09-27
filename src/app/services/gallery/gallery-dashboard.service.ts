import { Injectable } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/compat/functions';
import { map, Observable } from 'rxjs';
import { Photo } from 'src/app/Interfaces/Gallery';
import { AuthServiceService } from '../auth-service/auth-service.service';
import { UpdateRegistrationService } from '../update-registration/update-registration.service';

@Injectable({
  providedIn: 'root'
})
export class GalleryDashboardService {
  gallery:Photo[]=[]

  gallaryData: Observable<Photo[]>

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
    const callable = this.functions.httpsCallable("gallery/getPhotoes");
    callable({Start: start, End: end }).pipe(map(res=>{
      const data = res.data as Photo[];
      return data;
    })).subscribe({
      next: (data) => {
        data.forEach(element => {
          this.gallery.push(element);
        });
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        console.info('Getting Photos successful')
      }
    });
  }
}
