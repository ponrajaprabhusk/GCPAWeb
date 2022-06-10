import { Component, OnInit } from '@angular/core';
import { TestimonialsServiceService } from 'src/app/services/testimonials/testimonials-service.service';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {

  content=[
    {
      link:'https://en.wikipedia.org/wiki/Kailash_Satyarthi',
      img:'../../../assets/testimonial/KAILASHSATHYARTHI.png',
      head:'Dr. Kailash Satyarthi',
      subhead:'Nobel Peace Laureate',
      para:'Global Child Prodigy Awards brings the most brightest, the most talented young people at one place. Recognise, Respect and Reward the interest &amp; talent of your children.',
    },
    {
      link:'https://en.wikipedia.org/wiki/Kailash_Satyarthi',
      img:'../../../assets/testimonial/KAILASHSATHYARTHI.png',
      head:'Dr. Kailash Satyarthi',
      subhead:'Nobel Peace Laureate',
      para:'Global Child Prodigy Awards brings the most brightest, the most talented young people at one place. Recognise, Respect and Reward the interest &amp; talent of your children.',
    },
    {
      link:'https://en.wikipedia.org/wiki/Kailash_Satyarthi',
      img:'../../../assets/testimonial/KAILASHSATHYARTHI.png',
      head:'Dr. Kailash Satyarthi',
      subhead:'Nobel Peace Laureate',
      para:'Global Child Prodigy Awards brings the most brightest, the most talented young people at one place. Recognise, Respect and Reward the interest &amp; talent of your children.',
    },
    {
      link:'https://en.wikipedia.org/wiki/Kailash_Satyarthi',
      img:'../../../assets/testimonial/KAILASHSATHYARTHI.png',
      head:'Dr. Kailash Satyarthi',
      subhead:'Nobel Peace Laureate',
      para:'Global Child Prodigy Awards brings the most brightest, the most talented young people at one place. Recognise, Respect and Reward the interest &amp; talent of your children.',
    },
    {
      link:'https://en.wikipedia.org/wiki/Kailash_Satyarthi',
      img:'../../../assets/testimonial/KAILASHSATHYARTHI.png',
      head:'Dr. Kailash Satyarthi',
      subhead:'Nobel Peace Laureate',
      para:'Global Child Prodigy Awards brings the most brightest, the most talented young people at one place. Recognise, Respect and Reward the interest &amp; talent of your children.',
    },
    {
      link:'https://en.wikipedia.org/wiki/Kailash_Satyarthi',
      img:'../../../assets/testimonial/KAILASHSATHYARTHI.png',
      head:'Dr. Kailash Satyarthi',
      subhead:'Nobel Peace Laureate',
      para:'Global Child Prodigy Awards brings the most brightest, the most talented young people at one place. Recognise, Respect and Reward the interest &amp; talent of your children.',
    },
  ]

  constructor(public testimonialService:TestimonialsServiceService) { }

  ngOnInit(): void {
 this.testimonialService.getTestimonial()
  }

}
