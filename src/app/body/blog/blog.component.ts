import { Component, OnInit } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/compat/functions';
import { ActivatedRoute } from '@angular/router';
import { WpServiceService } from 'src/app/services/wp-service/wp-service.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  slug: String;
  post:any;
  allPosts: any;
  constructor(private route: ActivatedRoute, public functions: AngularFireFunctions, public wpService: WpServiceService) { }

  ngOnInit(): void {
  this.slug = this.route.snapshot.params['slug'];
  this.getPost();
  }

  getPost(){
    this.post = this.wpService.getPost(this.slug);
  }

  getAllPosts(){
    this.allPosts = this.wpService.getAllPosts();
  }

}
