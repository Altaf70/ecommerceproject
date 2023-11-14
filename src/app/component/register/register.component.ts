import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private api:ApiService,private fb:FormBuilder,private router:Router){}

  public registerForm = this.fb.group({
    user_name:this.fb.control('',[Validators.required,Validators.minLength(5)]),
    user_mobile:this.fb.control('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    user_email:this.fb.control('',[Validators.required,Validators.email]),
    user_password:this.fb.control('',[Validators.required,Validators.minLength(5)])
  })
   
  submitted:boolean = false;

  registerNow(){
    this.submitted = true;
    if(this.registerForm.valid){
      this.api.register(this.registerForm.value).subscribe((res)=>{
        this.loginProcess(this.registerForm.value.user_mobile,this.registerForm.value.user_password)
      });
    }
  };

  loginProcess(user_mobile:any,user_password:any){
    var obj = {"user_mobile":user_mobile,"user_password":user_password};
    this.api.login(obj).subscribe((res:any)=>{
      if(res.status == 'success'){        
        localStorage.setItem('token',res.token);
        this.router.navigate(['/'])
      };
    })
  }

  get rFC(){
    return this.registerForm.controls;
  }
};
