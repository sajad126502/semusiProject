import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Papa } from 'ngx-papaparse';
import { EnrollmentService } from 'src/app/enrollment.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  allFiles: any;
  jsonData:any=[[],]
  file: any;
  allUsersData: any = [];

  constructor(private _enrollment: EnrollmentService, private router: Router,private papa:Papa) {
    if (!localStorage.getItem('jwttoken')) {
      router.navigate(['login']);
    }
  }

  ngOnInit() {
    this.getAllUsers();
  }

  onFileChanged(event: any) {
    this.file = event.target.files[0];
  }

  upload() {
    if(this.file){

      this._enrollment.uploadFile(this.file).subscribe((res: any) => {
        this.getAllUsers()
        if (res) alert('uploaded successfully');
        // this.getAllUsers();
      });
    }
  }

  getAllUsers() {
    this._enrollment.getFiles().subscribe((allfiles: any) => {
      this.allFiles = allfiles.files;
    });
  }
  viewFile(filename:any){
    this._enrollment.viewFile(filename.item).subscribe((fileData: any) => {
      this.papa.parse(fileData,{
        complete: (result) => {
            this.jsonData= result.data;
        }
    });
    });

  }
}
