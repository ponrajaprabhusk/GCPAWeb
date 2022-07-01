import { Component, OnInit } from '@angular/core';
import { EcommerceDashboardService } from 'src/app/services/ecommerce/ecommerce-dashboard.service';
import {SlidesOutputData, OwlOptions } from 'ngx-owl-carousel-o';
import { Ecommerce } from 'src/app/Interfaces/Ecommerce';
import { Router } from '@angular/router';

@Component({
  selector: 'app-e-commerce',
  templateUrl: './e-commerce.component.html',
  styleUrls: ['./e-commerce.component.css']
})
export class ECommerceComponent implements OnInit {
  activeSlides?: SlidesOutputData;
  getPassedData(data: SlidesOutputData) {
    this.activeSlides = data;
  }

  constructor(public ecommerceService:EcommerceDashboardService, public router:Router) { }

  ngOnInit(): void {
    this.ecommerceService.getproducts();
  }
customOptions: OwlOptions = {
    loop: true,
    autoplay:true,
    autoplayTimeout:4000,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 100,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false,
  }

  goToProduct(product:Ecommerce){
    this.router.navigate(['/products',product.ProductId,product.ProductName]);
  }
}
