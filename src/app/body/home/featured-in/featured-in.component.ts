import { Component, OnInit } from '@angular/core';
import {SlidesOutputData, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-featured-in',
  templateUrl: './featured-in.component.html',
  styleUrls: ['./featured-in.component.css']
})
export class FeaturedInComponent {
  activeSlides?: SlidesOutputData;
  getPassedData(data: SlidesOutputData) {
    this.activeSlides = data;
    console.log(this.activeSlides);
  }

  dynamicSlides = [
    {
      id: '1',
      src:'../../../../assets/ani_news_1.jpeg',
      alt:'Side 1',
      title:'Side 1'
    },
    {
      id: '2',
      src:'../../../../assets/Untitleddesign(35).png',
      alt:'Side 2',
      title:'Side 2'
    },
    {
      id: '3',
      src:'../../../../assets/Untitleddesign(36).png',
      alt:'Side 3',
      title:'Side 3'
    },
    {
      id: '4',
      src:'../../../../assets/Untitleddesign(43).png',
      alt:'Side 4',
      title:'Side 4'
    },
    {
      id: '5',
      src:'../../../../assets/Untitleddesign(44).png',
      alt:'Side 5',
      title:'Side 5'
    },
    {
      id: '6',
      src:'../../../../assets/Untitleddesign(45).png',
      alt:'Side 6',
      title:'Side 6'
    },
    {
      id: '7',
      src:'../../../../assets/Untitleddesign(46).png',
      alt:'Side 7',
      title:'Side 7'
    }
  ]
  constructor() { }

  
  customOptions: OwlOptions = {
    loop: true,
    autoplay:true,
    autoplayTimeout:4000,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 100,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }

}
