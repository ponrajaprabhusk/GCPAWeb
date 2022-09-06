import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { WpServiceService } from 'src/app/services/wp-service/wp-service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-category-component',
  templateUrl: './category-component.component.html',
  styleUrls: ['./category-component.component.css']
})
export class CategoryComponentComponent implements OnInit {

  allPosts:any;
  categoryId:number;
  categoryData:any;
  category:string;
  endpoint:string;
  constructor(private wpService:WpServiceService, private http:HttpClient) { 
    this.endpoint=environment.endpoint + "/categories?per_page=100";
  }

  ngOnInit(): void {
    let url = window.location.pathname;
    console.log(url);
    let urlArray = url.split('/');
    console.log(urlArray);
    console.log(urlArray.length);
    this.category = urlArray[urlArray.length - 1];
    console.log(this.category);

    this.getCategories();

  }

  getCategories(){
    const categoriesObservable = this.http.get(this.endpoint).pipe(map(res=>{
     let data = res as Array<Object>;
      return data;
    }));
    categoriesObservable.subscribe((data)=>{
      this.categoryData = data;
      console.log(this.categoryData);
      this.categoryData = this.categoryData.filter((obj:any)=>{
        return obj.slug.includes(this.category);
      })

     this.categoryId = this.categoryData[0].id;
     this.getAllPosts();
    });
  }

  getAllPosts(){
    this.wpService.getPostsByCategory(this.categoryId);
    this.wpService.categoryPostsObservable.subscribe(data=>{
      this.allPosts = data;
      console.log(this.allPosts);
    })
  }

}
