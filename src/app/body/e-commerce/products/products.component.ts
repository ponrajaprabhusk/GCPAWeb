import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EcommerceDashboardService } from 'src/app/services/ecommerce/ecommerce-dashboard.service';
import {SlidesOutputData, OwlOptions } from 'ngx-owl-carousel-o';
import { Order } from 'src/app/Interfaces/Order';
import { AuthServiceService } from 'src/app/services/auth-service/auth-service.service';
import { OrderServiceService } from 'src/app/services/order/order-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  activeSlides?: SlidesOutputData;
  getPassedData(data: SlidesOutputData) {
    this.activeSlides = data;
  }

  checkout=false;
  productName="";
  productId="";
  quantity=1;
  order:Order={ 
    OrderId:"",
    Quantity:0,
    Name:"",
    MobileNum:"",
    Pincode:"",
    Address:"",
    City:"",
    State:"",
    Country:"",
    UserUid:"",
    ProductId:"",
    ProductName:"",
    TotalPrice:0
  }

  constructor(public route:ActivatedRoute,public ecommerceService:EcommerceDashboardService, public authService:AuthServiceService, public orderService:OrderServiceService) { }

  ngOnInit(): void {
    this.productName = this.route.snapshot.params[ 'productName' ]
    this.productId = this.route.snapshot.params[ 'productId' ]
    this.ecommerceService.getproductById(this.productId);

  }
  add(){
    this.quantity+=1;
  }
  minus(){
    if (this.quantity!=1) {
      
      this.quantity-=1;
    }
  }

  proceedToCheckout(){
this.checkout=true;
  }

  proceedToPayment(){
    this.order.Quantity=this.quantity;
    this.order.ProductId=this.productId;
    this.order.ProductName=this.productName;
    this.order.TotalPrice=this.quantity*this.ecommerceService.product.Price;
    this.order.UserUid=this.authService.loggedInUser.Uid;
    console.log(this.order);
    this.orderService.addOrder(this.order);
    }

  customOptions: OwlOptions = {
    loop: true,
    autoplay:true,
    autoplayTimeout:4000,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
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


}
