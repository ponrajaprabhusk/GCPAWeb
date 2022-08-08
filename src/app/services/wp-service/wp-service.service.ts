import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WpServiceService {
  array = [];
  public postObservable: Observable<Array<Object>>;
  public allPostObservable: Observable<Array<Object>>;
  endpoint:string;
  constructor(private http: HttpClient) { 
    this.endpoint=environment.endpoint;
  }
  

getPost(slug: String){
  this.postObservable = this.http.get(this.endpoint + '?slug=' + slug).pipe(map(res=>{
    const data = res as Array<Object>;
    console.log(data);
    return data;
  }));
  return this.postObservable;
}

getAllPosts(){
  //Please limit the per page number to how many you need for
  this.allPostObservable = this.http.get(this.endpoint + '?per_page=100').pipe(map(res=>{
    const data = res as Array<Object>;
    console.log(data);
    return data;
  }));
  return this.allPostObservable;
}
}