import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAdminComponent } from './components/add-admin/add-admin.component';
import { AddChefComponent } from './components/add-chef/add-chef.component';
import { AddPlatComponent } from './components/add-plat/add-plat.component';
import { BannerComponent } from './components/banner/banner.component';
import { BindingComponent } from './components/binding/binding.component';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { DisplayUserComponent } from './components/display-user/display-user.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';


const routes: Routes = [
  {path: '', component : HomeComponent},
  {path: 'login', component : LoginComponent},
  {path: "binding" ,component : BindingComponent},
  {path: "addAdmin" ,component : AddAdminComponent},
  {path: "editUser/:id" ,component : AddAdminComponent},
  {path: "signup" ,component : SignupComponent},
  {path: "addChef" ,component : AddChefComponent},
  {path: "addPlat" ,component : AddPlatComponent},
  {path: "dashboardAdmin" ,component : DashboardAdminComponent},
  // dynamic path
  {path: "displayUser/:id" ,component : DisplayUserComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
