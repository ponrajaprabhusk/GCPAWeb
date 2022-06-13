import { Injectable } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/compat/functions';
import { map } from 'rxjs';
import { Partners } from 'src/app/Interfaces/Partners';
import { Testimonial } from 'src/app/Interfaces/Testimonials';
import { AuthServiceService } from '../auth-service/auth-service.service';
import { UpdateRegistrationService } from '../update-registration/update-registration.service';

@Injectable({
  providedIn: 'root'
})
export class TestimonialsServiceService {
  testimonials:Testimonial[]=[]

  constructor(public functions: AngularFireFunctions, public updateRegistration: UpdateRegistrationService , public authService:AuthServiceService) { }
  addTestimonial(testimonial:Testimonial)  {
    const callable = this.functions.httpsCallable('testimonials/addTestimonial');
        console.log("add Testimonial");
        callable({ uid:testimonial.Uid, testimonial:testimonial.Testimonial, name:testimonial.Name, imageUrl:testimonial.ImageUrl, achievement:testimonial.Achievement }).subscribe({
          next: (data) => {
            console.log("Testimonial Added");
      
          },
          error: (error) => {
            console.error("Error", error);
          },
        complete: () => console.info('Successful ')
    });
  }
  
  getTestimonial(){
    const callable = this.functions.httpsCallable("testimonials/getTestimonials");
  callable({ }).pipe(map(res=>{
    const data = res.data as Testimonial[];
    return data;
  })).subscribe({
    next: (data) => {
      this.testimonials = data;
    },
    error: (error) => {
      console.error(error);
    },
    complete: () => {
      console.info('Getting Testimonial successful')
    }
  });
}

}
