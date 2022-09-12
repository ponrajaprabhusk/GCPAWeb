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
  public categoryPostsObservable: Observable<Array<Object>>;
  public tagPostsObservable: Observable<Array<Object>>;
  endpoint:string;
  constructor(private http: HttpClient) { 
    this.endpoint=environment.endpoint;
  }
  

getPost(slug: String){
  this.postObservable = this.http.get(this.endpoint + "/posts"+ '?slug=' + slug).pipe(map(res=>{
    const data = res as Array<Object>;
    return data;
  }));
  return this.postObservable;
}

getAllPosts(){
  //Please limit the per page number to how many you need for
  this.allPostObservable = this.http.get(this.endpoint + "/posts" + '?per_page=100').pipe(map(res=>{
    const data = res as Array<Object>;
    console.log(data);
    return data;
  }));
  return this.allPostObservable;
}

// not working
getPostsByCategory(category: number){
  this.categoryPostsObservable = this.http.get(this.endpoint + "/posts" + '?categories=' + category + '&per_page=100').pipe(map(res=>{
    const data = res as Array<Object>;
    return data;
  }));
  return this.categoryPostsObservable;
}

getPostsByTag(tag:number){
  this.tagPostsObservable = this.http.get(this.endpoint  + "/posts" + '?tags=' + tag).pipe(map(res=>{
    const data = res as Array<Object>;
    return data;
  }));
  return this.tagPostsObservable;
}
}