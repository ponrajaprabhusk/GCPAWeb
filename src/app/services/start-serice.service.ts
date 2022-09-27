import { Injectable } from '@angular/core';
import { GalleryDashboardService } from './gallery/gallery-dashboard.service';

@Injectable({
  providedIn: 'root'
})
export class StartSericeService {

  constructor(private galleryService: GalleryDashboardService) { }
  StartApplication(){
    this.galleryService.getphoto(0,20).subscribe((data)=>{});
  }
}
