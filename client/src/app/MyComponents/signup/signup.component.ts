import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { User } from 'src/app/user';
import { EnrollmentService } from 'src/app/enrollment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  userModal = new User("", "", "");
  _url='';
  constructor(private _enrollmentService: EnrollmentService, private router: Router){
    if(localStorage.getItem("jwttoken")){
      router.navigate(["home"])
    }
  }
  onSubmit(){
    console.log(this.userModal);
    this._enrollmentService.enroll(this.userModal).subscribe((res) => {
      console.log(res);
      this.router.navigate(["login"])
    },(err)=>{
      console.log(err);
    })
  }
  
}
