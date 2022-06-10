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
import { NumberOfRegistrationsComponent } from './body/number-of-registrations/number-of-registrations.component';
import { PaymentComponent } from './body/payment/payment.component';
import { PaymentStatusComponent } from './body/payment-status/payment-status.component'
import { SupportComponent } from './body/support/support.component';
import { SupportDetailsComponent } from './body/support/support-details/support-details.component';
import { DashboardComponent } from './body/dashboard/dashboard.component';
import { RegistrationDetailComponent } from './body/number-of-registrations/registration-detail/registration-detail.component';
import { AngularFireAuthGuard } from '@angular/fire/compat/auth-guard';
import { RegistrationDetailsAdminComponent } from './body/dashboard/registration-details-admin/registration-details-admin.component';
import { EditRegistrationComponent } from './body/dashboard/edit-registration/edit-registration.component';
import { SponsorsPartnersComponent } from './body/dashboard/sponsors-partners/sponsors-partners.component';
import { TestimonialsDashboardComponent } from './body/dashboard/testimonials-dashboard/testimonials-dashboard.component';
import { NewsroomDashboardComponent } from './body/dashboard/newsroom-dashboard/newsroom-dashboard.component';
import { GalleryDashboardComponent } from './body/dashboard/gallery-dashboard/gallery-dashboard.component';
import { RegistrationDashboardComponent } from './body/dashboard/registration-dashboard/registration-dashboard.component';
import { UsersDashboardComponent } from './body/dashboard/users-dashboard/users-dashboard.component';

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
  // {path:'LoginPage', component: LoginPageComponent},
  {path:'Registration', component: RegistrationComponent},
  {path:'yourRegistrations', component: NumberOfRegistrationsComponent},
  {path:'payment/:registrationId', component: PaymentComponent},
  {path:'paymentStatus/:orderId/:paymentId/:signature/:id', component: PaymentStatusComponent},
  {path:'supportPage', component: SupportComponent},
  {path:'supportDetails/:ticketId', component: SupportDetailsComponent,canActivate: [AngularFireAuthGuard]},
  {path:'dashboard', component:DashboardComponent},
  {path:'registrationDetail/:uid', component:RegistrationDetailComponent, canActivate: [AngularFireAuthGuard]},
  {path:'registrationDetailAdmin/:uid', component:RegistrationDetailsAdminComponent, canActivate: [AngularFireAuthGuard]},
  {path:'editRegistration/:uid', component:EditRegistrationComponent, canActivate: [AngularFireAuthGuard]},
  {path:'sponsorspartners', component:SponsorsPartnersComponent},
  {path:'testimonialsDashboard', component:TestimonialsDashboardComponent},
  {path:'newsroomDashboard', component:NewsroomDashboardComponent},
  {path:'galleryDashboard', component:GalleryDashboardComponent},
  {path:'registrationDashboard', component:RegistrationDashboardComponent},
  {path:'usersDashboard', component:UsersDashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
