import { Injectable } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/compat/functions';
import { map } from 'rxjs';
import { Order } from 'src/app/Interfaces/Order';
import { AuthServiceService } from '../auth-service/auth-service.service';
import { UpdateRegistrationService } from '../update-registration/update-registration.service';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {
orders:Order[];
  constructor(public functions: AngularFireFunctions, public updateRegistration: UpdateRegistrationService , public authService:AuthServiceService) { }
  addOrder(order:Order)  {
    const callable = this.functions.httpsCallable('ecommerce/addOrder');
        console.log("add Order");
        callable({orderId:order.OrderId, quantity:order.Quantity, address:order.Address, city:order.City, country:order.Country,mobileNum:order.MobileNum, name:order.Name, pincode:order.Pincode, productId:order.ProductId, productName:order.ProductName, state:order.State, totalPrice:order.TotalPrice, userUid:order.UserUid  }).subscribe({
          next: (data) => {
            console.log("Order Added");
      
          },
          error: (error) => {
            console.error("Error", error);
          },
        complete: () => console.info('Successful ')
    });
  }
  
  getorders(){
    const callable = this.functions.httpsCallable("ecommerce/getOrders");
  callable({ }).pipe(map(res=>{
    const data = res.data as Order[];
    return data;
  })).subscribe({
    next: (data) => {
      this.orders = data;
    },
    error: (error) => {
      console.error(error);
    },
    complete: () => {
      console.info('Getting Order successful')
    }
  });
}
}
