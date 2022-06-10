import { Component, OnInit } from '@angular/core';
import { GalleryDashboardService } from 'src/app/services/gallery/gallery-dashboard.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  content=[
    {
      src:'../../../assets/gallery/2020 Event Pic_20.png',
      hovering:false
    },
    {
      src:'../../../assets/gallery/2020 Event Pic_44.png',
      hovering:false
    },
    {
      src:'../../../assets/gallery/2020 Event Pic_48.png',
      hovering:false
    },
    {
      src:'../../../assets/gallery/2020 Event Pic_20.png',
      hovering:false
    },
    {
      src:'../../../assets/gallery/2020 Event Pic_44.png',
      hovering:false
    },
    {
      src:'../../../assets/gallery/2020 Event Pic_48.png',
      hovering:false
    },
    {
      src:'../../../assets/gallery/2020 Event Pic_20.png',
      hovering:false
    },
    {
      src:'../../../assets/gallery/2020 Event Pic_44.png',
      hovering:false
    },
    {
      src:'../../../assets/gallery/2020 Event Pic_48.png',
      hovering:false
    },
    {
      src:'../../../assets/gallery/2020 Event Pic_20.png',
      hovering:false
    },
    {
      src:'../../../assets/gallery/2020 Event Pic_44.png',
      hovering:false
    },
    {
      src:'../../../assets/gallery/2020 Event Pic_48.png',
      hovering:false
    },
    {
      src:'../../../assets/gallery/2020 Event Pic_20.png',
      hovering:false
    },
    {
      src:'../../../assets/gallery/2020 Event Pic_44.png',
      hovering:false
    },
    {
      src:'../../../assets/gallery/2020 Event Pic_48.png',
      hovering:false
    },
    {
      src:'../../../assets/gallery/2020 Event Pic_20.png',
      hovering:false
    },
    {
      src:'../../../assets/gallery/2020 Event Pic_44.png',
      hovering:false
    },
    {
      src:'../../../assets/gallery/2020 Event Pic_48.png',
      hovering:false
    },
    {
      src:'../../../assets/gallery/2020 Event Pic_20.png',
      hovering:false
    },
    {
      src:'../../../assets/gallery/2020 Event Pic_44.png',
      hovering:false
    },
    
  ]

  constructor(public galleryService:GalleryDashboardService) { }

  ngOnInit(): void {
this.galleryService.getphoto();
  }
  
}
