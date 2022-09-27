import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { Photo } from 'src/app/Interfaces/Gallery';
import { GalleryDashboardService } from 'src/app/services/gallery/gallery-dashboard.service';
import { RawDataServiceService } from 'src/app/services/raw-data/raw-data-service.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  gallery:Photo[] = [];
  prevLimit:number = 0;
  dataReady:boolean = false;

  constructor(public galleryService:GalleryDashboardService, public rawDataService: RawDataServiceService) { }

  ngOnInit(): void {
  this.rawDataService.getRawData();
  this.prevLimit = 20;
   if(this.galleryService.gallery.length == 0)
   {
    this.galleryService.getphoto(0,20).subscribe({
      next: (data) => {
        this.gallery = data;
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        this.dataReady = true;
        console.info('Getting Photos successful')
      }
      });
   } else {
    this.gallery = this.galleryService.gallery;
    console.log("Data Available");
    this.dataReady = true;
   }
  
  
}

  showMore(){
    this.dataReady = false;
    const noOfPics = this.rawDataService.rawData[0].NumberOfGalleryPics;
    let newLimit;
    if(this.prevLimit + 20 > noOfPics){
      newLimit = noOfPics;
    }else{
      newLimit = this.prevLimit + 20;
    }
    this.galleryService.getphoto(this.prevLimit, newLimit).subscribe({
      next: (data) => {
        data.forEach(element => {
          this.gallery.push(element);
        });
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        this.dataReady = true;
        this.prevLimit +=20;
        console.info('Getting Photos successful')
      }
      });
  }
  
}
