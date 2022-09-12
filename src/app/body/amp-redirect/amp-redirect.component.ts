import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-amp-redirect',
  templateUrl: './amp-redirect.component.html',
  styleUrls: ['./amp-redirect.component.css']
})
export class AmpRedirectComponent implements OnInit {
 slug:string;
  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.slug = this.route.snapshot.params['slug'];
    console.log(this.slug);
    this.router.navigate(['blog/', this.slug]);
  }

}
