import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service/auth-service.service';
import { TestimonialsServiceService } from 'src/app/services/testimonials/testimonials-service.service';

@Component({
  selector: 'app-testimonials-dashboard',
  templateUrl: './testimonials-dashboard.component.html',
  styleUrls: ['./testimonials-dashboard.component.css']
})
export class TestimonialsDashboardComponent implements OnInit {
  newTestimonial=false;
  constructor(public testimonialService:TestimonialsServiceService,private router: Router,public authService:AuthServiceService) { }

  ngOnInit(): void {
    if (this.authService.user) {
      if (this.authService.loggedInUser.Admin===false) {
        this.router.navigate([''])
      }
    }
    else{
    // this.popupService.loginPopup=true
    this.router.navigate([''])
    }
 this.testimonialService.getTestimonial()
  }

  showNewTestimonial(){
    this.newTestimonial=true;
  }

}
