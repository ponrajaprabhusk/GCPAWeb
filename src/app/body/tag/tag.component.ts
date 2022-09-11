import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { WpServiceService } from 'src/app/services/wp-service/wp-service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {

  tagId:number;
  tag:string;
  tagData:any;
  allPosts:any;
  endpoint:string;
  constructor(public wpService:WpServiceService, private route:ActivatedRoute, private http:HttpClient) {
    this.endpoint=environment.endpoint + "/tags?search=";
   }

  ngOnInit(): void {
    this.tag = this.route.snapshot.params['tag'];
    console.log(this.tag);
    this.getTagId();

  }

  getTagId(){
    const tagsObservable = this.http.get(this.endpoint + this.tag).pipe(map(res=>{
      let data = res as Array<Object>;
       return data;
     }));
     tagsObservable.subscribe((data)=>{
       this.tagData = data;
       console.log(this.tagData);
       this.tagData = this.tagData.filter((obj:any)=>{
         return obj.slug.includes(this.tag);
        })
        
        console.log(this.tagData);
      this.tagId = this.tagData[0].id;
      console.log(this.tagData[0].id);
      this.getAllPosts();
     });
  }

  getAllPosts(){
    this.wpService.getPostsByTag(this.tagId);
    this.wpService.tagPostsObservable.subscribe(data=>{
      this.allPosts = data;
      console.log(this.allPosts);
    })
  }

}
