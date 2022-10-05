import { Injectable } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/compat/functions';
import { map, Observable } from 'rxjs';
import { Ecommerce } from 'src/app/Interfaces/Ecommerce';
import { RawData } from 'src/app/Interfaces/RawData';
import { Register } from 'src/app/Interfaces/RegistrationInterface';
import { UserFetched } from 'src/app/Interfaces/UserInterface';
import { AuthServiceService } from '../auth-service/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class DataTableServiceService {

  public registrationsDataObservable: Observable<Register[]>;
  public rawDataObservable: Observable<RawData[]>;
  public userDataObservable: Observable<UserFetched[]>;
  public registrationDataObservable: Observable<Register[]>;
  public productDataObservable: Observable<Ecommerce[]>;



  constructor(public authService:AuthServiceService, public functions:AngularFireFunctions) { }

  getRegistrations(){
    const useruid = this.authService.user.uid;
    const callable = this.functions.httpsCallable("readData/getUsersRegistrations");
    this.registrationsDataObservable=callable({UserUid: useruid }).pipe(map(res=>{
      const data = res.data as Register[];
      return data;
    }));
    return this.registrationsDataObservable
  }

  getRawData(){
    const callable = this.functions.httpsCallable("rawDatas/getRawData");
    this.rawDataObservable=callable({}).pipe(map(res=>{
      const data = res.data as RawData[];
      return data;
    }));
    return this.rawDataObservable
  }
  getUserData(){
    
    const callable = this.functions.httpsCallable("users/getUsers");
    this.userDataObservable=callable({}).pipe(map(res=>{
      const data = res.data as UserFetched[];
      return data;
    }));
    return this.userDataObservable
  }

  getRegistrationsData(){
    
    const callable = this.functions.httpsCallable("registrations/getAllRegistrations");
    this.registrationDataObservable=callable({}).pipe(map(res=>{
      const data = res.data as Register[];
      return data;
    }));
    return this.registrationDataObservable
  }

  getProductData(){
    
    const callable = this.functions.httpsCallable("ecommerce/getProducts");
    this.productDataObservable=callable({}).pipe(map(res=>{
      const data = res.data as Ecommerce[];
      return data;
    }));
    return this.productDataObservable
  }
}