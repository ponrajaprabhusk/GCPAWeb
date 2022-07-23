import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WpServiceService {

  constructor(private http: HttpClient) { }
  endpoint = 'https://gcpawards.com/blog/wp-json/wp/v2/posts/';

getPost(slug: String){
  let result = this.http.get(this.endpoint + '?slug=' + slug).subscribe({
    next: (data) => {
      console.log(data.toString());
      if(data.toString() == ""){
        console.log("error");
        return null;
      }else{
        return data;
      }
    },
    error: (e) => console.error(e),
    complete: () => console.info('complete') 
});
  return result;
}

getAllPosts(){
  //Please limit the per page number to how many you need for
  let result = this.http.get(this.endpoint + '?per_page=100').subscribe({
    next: (data) => console.log(data),
    error: (e) => console.error(e),
    complete: () => console.info('complete') 
});
  return result;
}
}