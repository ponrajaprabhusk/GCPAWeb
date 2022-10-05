import { Injectable } from '@angular/core';
import { GalleryDashboardService } from './gallery/gallery-dashboard.service';
import { PartnerServiceService } from './partners/partner-service.service';
import { TestimonialsServiceService } from './testimonials/testimonials-service.service';

@Injectable({
  providedIn: 'root'
})
export class StartSericeService {

  constructor(private galleryService: GalleryDashboardService, private testimonialService: TestimonialsServiceService, private partnerService: PartnerServiceService) { }
  StartApplication(){
    this.galleryService.getphoto(0,20);
    this.testimonialService.getTestimonial();
    this.partnerService.getPartners();
  }
}
