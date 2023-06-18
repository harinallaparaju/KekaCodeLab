import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  userData: any = [{
    userName: '',
    userEmail: '',
    userMobile: '',
    userLandline: '',
    userWebsite: '',
    userAddress: '',
  }];

  constructor(private api: ApiService){}

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(){
    this.api.getUser()
    .subscribe({ 
      next:(res)=>{
        this.userData = res;
      },
      error:(err)=>{
        alert("Error: Cannot Fetch Users");
      }
    })
  }
}
