import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private api:ApiService,private router:Router,private fb:FormBuilder){}

  public login = this.fb.group({
    user_mobile:this.fb.control('',[Validators.required,Validators.minLength(10)]),
    user_password:this.fb.control('',[Validators.required])
  })

  submitted:boolean =false;

  msg:string = '';

  loginProcess(){
    this.submitted =true;
    if(this.login.valid){
      this.api.login(this.login.value).subscribe((res:any)=>{
        if(res.status == 'success'){        
          localStorage.setItem('token',res.token);
          this.router.navigate(['/'])
        }else{
          this.msg = res.msg;
          setTimeout(()=>{this.msg =''},7000)
        }
      })
    }
  };

  get lFC(){
    return this.login.controls
  }

};
