import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{

  isAddMode = true;
  userId: any;
  Form: FormGroup;
  patchData: any;

  constructor(private fb: FormBuilder, private api: ApiService, private route: ActivatedRoute){
    
    this.Form = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3)]],
      userEmail: ['', [Validators.required, Validators.email, Validators.pattern(/^([a-zA-Z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/)]],
      userMobile: ['', [Validators.required, Validators.pattern(/^(\+\d{1,3}[- ]?)?\d{10}$/)]],
      userLandline: ['', [Validators.required]],
      userWebsite: ['', [Validators.required]],
      userAddress: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.userId = params.get('id');
      if(this.userId){
        this.isAddMode = false;
      }
    })

    if(this.userId){
      this.api.getDataById(this.userId).subscribe({
        next:(res)=> {
          this.patchData = res;
          this.Form.patchValue(this.patchData);
        }
      })
    }
  }

  addUser() {
      this.api.saveUser(this.Form.value)
      .subscribe({
        next:(res)=> {
          console.log(res);
        },
        error:()=>{
          alert("Error: Cannot Add User");
        }
      })  
    console.log(this.Form.value);
  }


  updateUser(data: any) {
    this.api.updateUser(data, this.userId).subscribe({
      next:(res)=> {
        console.log(res);
      },
      error:()=> {
        alert("Error: Cannot Update User");
      }
    })
    console.log(data);
  }
}
