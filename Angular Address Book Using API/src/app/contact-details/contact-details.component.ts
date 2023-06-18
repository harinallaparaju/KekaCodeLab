import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit{

  id: any;
  userDetails: any = {
    userName: '',
    userEmail: '',
    userMobile: '',
    userLandline: '',
    userWebsite: '',
    userAddress: '',
  }

  userData: any = [{
    userName: '',
    userEmail: '',
    userMobile: '',
    userLandline: '',
    userWebsite: '',
    userAddress: '',
  }];

  constructor(private api: ApiService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.api.getDataById(this.id).subscribe({
        next:(res)=> {
          this.userDetails = res;
          console.log(this.userDetails);
        }
      })
      console.log(this.id);
    });
    this.getAllUsers();
  }

  getAllUsers(){
    this.api.getUser()
    .subscribe({
      next:(res)=>{
        this.userData = res;
        console.log(this.userData);
        console.log(res);
      },
      error:(err)=>{
        alert("Error: Cannot Fetch Users");
      }
    })
  }

  deleteUser(){
    this.api.deleteUser(this.id).subscribe({
      next: (res)=> {
        console.log(res);
      },
      error:(err)=>{
        alert("Error: Cannot Delete")
      }
    })
  }

}
