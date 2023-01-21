import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
// import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './MyComponents/navbar/navbar.component';
import { LoginComponent } from './MyComponents/login/login.component';
import { SignupComponent } from './MyComponents/signup/signup.component';
import { HomeComponent } from './MyComponents/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
