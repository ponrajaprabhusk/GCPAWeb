import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './body/home/banner/banner.component';
import { TestimonialsComponent } from './body/home/testimonials/testimonials.component';
import { SectionsComponent } from './body/home/testimonials/sections/sections.component';
import { Sections2Component } from './body/home/testimonials/sections2/sections2.component';
import { Sections3Component } from './body/home/testimonials/sections3/sections3.component';
import { LatestNewsComponent } from './body/home/latest-news/latest-news.component';
import { FeaturedInComponent } from './body/home/featured-in/featured-in.component';
import { FeaturedInSliderComponent } from './body/home/featured-in/featured-in-slider/featured-in-slider.component';
import { FooterComponent } from './footer/footer.component';
import { SponsersComponent } from './body/home/sponsers/sponsers.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './body/home/home.component';
import { AboutComponent } from './body/about/about.component';
import {BodyComponent} from './body/body.component';
import { IntroComponent } from './body/about/intro/intro.component';
import { Routes,RouterModule } from '@angular/router';
import { WhatIsComponent } from './body/about/what-is/what-is.component';
import { MissionComponent } from './body/about/mission/mission.component';
import { VisionComponent } from './body/about/vision/vision.component';
import { HowItWorksComponent } from './body/how-it-works/how-it-works.component';
import { HowComponent } from './body/how-it-works/how/how.component';
import { CategoriesComponent } from './body/how-it-works/categories/categories.component';
import { PartnersComponent } from './body/partners/partners.component';
import { GalleryComponent } from './body/gallery/gallery.component';
import { NewsroomComponent } from './body/newsroom/newsroom.component';
import { TermsCondiComponent } from './body/terms-condi/terms-condi.component';
import { TestimonialComponent } from './body/testimonial/testimonial.component';
import { ContactComponent } from './body/contact/contact.component';

const appRoutes: Routes=[
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'how-it-works',component:HowItWorksComponent},
  {path:'partners',component:PartnersComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'newsroom',component:NewsroomComponent},
  {path:'terms_condi',component:TermsCondiComponent},
  {path:'testimonial',component:TestimonialComponent},
  {path:'contact',component:ContactComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    TestimonialsComponent,
    SectionsComponent,
    Sections2Component,
    Sections3Component,
    LatestNewsComponent,
    FeaturedInComponent,
    FeaturedInSliderComponent,
    FooterComponent,
    SponsersComponent,
    HomeComponent,
    AboutComponent,
    BodyComponent,
    IntroComponent,
    WhatIsComponent,
    MissionComponent,
    VisionComponent,
    HowItWorksComponent,
    HowComponent,
    CategoriesComponent,
    PartnersComponent,
    GalleryComponent,
    NewsroomComponent,
    TermsCondiComponent,
    TestimonialComponent,
    ContactComponent,
   
    
  ],
  imports: [
    BrowserAnimationsModule,
    CarouselModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
