import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  token:any;

  constructor(private api:ApiService,private router:Router){
    this.token=localStorage.getItem('token');
    this.api.cart_list().subscribe((res:any)=>{
      this.cart_length = res.length      
    });
    this.api.cart_event.subscribe((res:any)=>{
      if(res == 'cart'){
        this.loadLength();
      }
    })
  }

  cart_length:any;

  cat_list:any;

  ngOnInit(){
    this.loadList()
  };

  loadLength(){
    this.api.cart_list().subscribe((res:any)=>{
      this.cart_length = res.length      
    });
  }

  loadList(){
    this.api.getCatList().subscribe((res)=>{
      this.cat_list = res;
    });
  }

  logOut(){
    localStorage.removeItem('token');
    this.token=localStorage.getItem('token');
    this.router.navigate(['/login'])

  }
};
