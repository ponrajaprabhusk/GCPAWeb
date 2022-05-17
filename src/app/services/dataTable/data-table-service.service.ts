import { Injectable } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/compat/functions';
import { map, Observable } from 'rxjs';
import { Register } from 'src/app/Interfaces/RegistrationInterface';
import { AuthServiceService } from '../auth-service/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class DataTableServiceService {

  public registrationsDataObservable: Observable<Register[]>;



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
}
