import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './body/about/about.component';
import { ContactComponent } from './body/contact/contact.component';
import { GalleryComponent } from './body/gallery/gallery.component';
import { HomeComponent } from './body/home/home.component';
import { HowItWorksComponent } from './body/how-it-works/how-it-works.component';
import { LoginPageComponent } from './body/login-page/login-page.component';
import { NewsroomComponent } from './body/newsroom/newsroom.component';
import { PartnersComponent } from './body/partners/partners.component';
import { TermsCondiComponent } from './body/terms-condi/terms-condi.component';
import { TestimonialComponent } from './body/testimonial/testimonial.component';
import { RegistrationComponent } from './body/registration/registration.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'how-it-works',component:HowItWorksComponent},
  {path:'partners',component:PartnersComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'newsroom',component:NewsroomComponent},
  {path:'terms_condi',component:TermsCondiComponent},
  {path:'testimonial',component:TestimonialComponent},
  {path:'contact',component:ContactComponent},
  {path:'LoginPage', component: LoginPageComponent},
  {path:'Registration', component: RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
