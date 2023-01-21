import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Userlogin } from './userlogin';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  _urlRegister='http://localhost:9000/api/auth/signup';
  _urlLogin='http://localhost:9000/api/auth/signin';
  _urlUpload='http://localhost:9000/api/csv/upload';
  _urlGetFiles='http://localhost:9000/api/csv/getfiles';
  _urlStatic='http://localhost:9000/uploads';

  constructor(private _http: HttpClient) { }

  enroll(user: User){
    return this._http.post(this._urlRegister, user);
  }

  login(userlogin: Userlogin){
    return this._http.post(this._urlLogin, userlogin);
  }
  uploadFile(data: any) {
    const uploadData = new FormData();
    uploadData.append('csvfile', data);
    if(localStorage.getItem("jwttoken")){
      console.log(localStorage.getItem("jwttoken"))
      uploadData.append('jwttoken',String(localStorage.getItem("jwttoken")))

    }
    return this._http.post(this._urlUpload, uploadData);
  }
  getFiles(){
    return this._http.post(this._urlGetFiles, {jwttoken:localStorage.getItem("jwttoken")});
  }
  viewFile(filename:any){
    return this._http.get(`${this._urlStatic}/${filename}`,{responseType: 'text'});
  }
}
