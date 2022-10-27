import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { PopularDishesComponent } from './components/popular-dishes/popular-dishes.component';
import { HistoryComponent } from './components/history/history.component';
import { VideoComponent } from './components/video/video.component';
import { PopularMenuComponent } from './components/popular-menu/popular-menu.component';
import { ChefsComponent } from './components/chefs/chefs.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { NewsComponent } from './components/news/news.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { BindingComponent } from './components/binding/binding.component';
import { AddAdminComponent } from './components/add-admin/add-admin.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SignupComponent } from './components/signup/signup.component';
import { HttpClientModule } from "@angular/common/http";
import { AddChefComponent } from './components/add-chef/add-chef.component';
import { AddPlatComponent } from './components/add-plat/add-plat.component';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { ChefComponent } from './components/chef/chef.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { DisplayUserComponent } from './components/display-user/display-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    BannerComponent,
    PopularDishesComponent,
    HistoryComponent,
    VideoComponent,
    PopularMenuComponent,
    ChefsComponent,
    ReservationComponent,
    TestimonialsComponent,
    NewsComponent,
    FooterComponent,
    LoginComponent,
    BindingComponent,
    AddAdminComponent,
    SignupComponent,
    AddChefComponent,
    AddPlatComponent,
    DashboardAdminComponent,
    ChefComponent,
    ReversePipe,
    DisplayUserComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
