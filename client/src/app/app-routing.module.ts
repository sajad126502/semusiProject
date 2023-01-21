import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './MyComponents/home/home.component';
import { LoginComponent } from './MyComponents/login/login.component';
import { SignupComponent } from './MyComponents/signup/signup.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'signup', component: SignupComponent
  },
  {
    path: 'home', component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
