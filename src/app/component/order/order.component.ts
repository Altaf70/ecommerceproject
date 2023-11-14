import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  constructor(private api:ApiService,private fb:FormBuilder,private router:Router){}

  public registerForm = this.fb.group({
    area:this.fb.control('',[Validators.required,Validators.minLength(10)]),
    city:this.fb.control('',[Validators.required]),
    district:this.fb.control('',[Validators.required]),
    state:this.fb.control('Maharashtra',[Validators.required]),
    country:this.fb.control('India',[Validators.required]),
    pincode:this.fb.control('',[Validators.required,Validators.minLength(6)]),
    payment_type:this.fb.control('COD',[Validators.required])
  })

  public submitted:boolean = false;

  placeOrder(){
    this.submitted = true;
    if(this.registerForm.valid){
      this.api.place_order(this.registerForm.value).subscribe((res:any)=>{
        if(res.status == 'success'){
          this.router.navigate(['/order_details/'+res.order_id])
        }
      })
    }
  }

  get oFC(){
    return this.registerForm.controls
  }

};
