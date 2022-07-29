import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WpServiceService {
  array = [];
  public postObservable: Observable<Array<Object>>;
  public allPostObservable: Observable<Array<Object>>;
  constructor(private http: HttpClient) { }
  endpoint = 'https://gcpawards.com/blog/wp-json/wp/v2/posts/';

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
  this.allPostObservable = this.http.get(this.endpoint + '?per_page=50').pipe(map(res=>{
    const data = res as Array<Object>;
    console.log(data);
    data.forEach(element => {
      console.log(element);
    });
    return data;
  }));
  return this.allPostObservable;
}
}