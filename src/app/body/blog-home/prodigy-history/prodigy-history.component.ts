import { Component, OnInit } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/compat/functions';
import { ActivatedRoute, Router } from '@angular/router';
import { WpServiceService } from 'src/app/services/wp-service/wp-service.service';

@Component({
  selector: 'app-prodigy-history',
  templateUrl: './prodigy-history.component.html',
  styleUrls: ['./prodigy-history.component.css']
})
export class ProdigyHistoryComponent implements OnInit {
  slug: String;
  post:any;
  allPosts: any;
  content:any;
  postReady: boolean;
  constructor(private route: ActivatedRoute, public functions: AngularFireFunctions, public wpService: WpServiceService, public router:Router) { }

  ngOnInit(): void {
    this.postReady = false;
  this.slug = this.route.snapshot.params['slug'];
  // this.getPost();
  this.getAllPosts();
  }

  getPost(){
    this.wpService.getPost(this.slug);
    this.wpService.postObservable.subscribe(data=>{
    this.post = data;
    console.log(data);
    this.post = this.post[0];
    this.postReady = true;
    
    })
    
  }

  getAllPosts(){
    console.log("kokj")
    this.wpService.getAllPosts();
    this.wpService.allPostObservable.subscribe(data=>{
      this.allPosts = data;
      this.allPosts=this.allPosts.filter((obj:any)=>{
        return obj.categories.includes(709)
      })
      console.log(this.allPosts);
    })
  }


}
