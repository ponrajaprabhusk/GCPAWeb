import { Injectable } from '@angular/core';
import { GalleryDashboardService } from './gallery/gallery-dashboard.service';

@Injectable({
  providedIn: 'root'
})
export class StartSericeService {

  constructor(private galleryService: GalleryDashboardService) { }
  gallery:any;
  StartApplication(){
    this.galleryService.getphoto(0,20).subscribe({
      next: (data) => {
        this.gallery = data;
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
