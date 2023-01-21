import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Userlogin } from 'src/app/userlogin';
import { EnrollmentService } from 'src/app/enrollment.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userLoginModal = new Userlogin("", "");
  constructor(private _enrollmentService: EnrollmentService, private router: Router){
     if(localStorage.getItem("jwttoken"))
     {router.navigate(['home'])}
  }
  onSubmit(){
    console.log(this.userLoginModal);
    this._enrollmentService.login(this.userLoginModal).subscribe(({token}:any) => {
      console.log(token)
     localStorage.setItem("jwttoken",token);
      this.router.navigate(['home'])
    },(err)=>{
      console.log(err.error)
    })
  }
}
