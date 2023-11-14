import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor(private api:ApiService,private router:Router){}

  public cartList:any;
  public total:number = 0;
  public c_length:any;

  ngOnInit():void{
    this.api.cart_list().subscribe((res)=>{
      this.cartList = res;
      this.c_length = this.cartList.length
      
      this.total =0;
      for(let item of this.cartList){
        this.total += item.price * item.qty;
      }
    })
  }

  incQty(id:any){
    this.api.inc_cart_qty(id).subscribe((res:any)=>{      
      this.ngOnInit();
    });
  }

  decQty(id:any){
    this.api.dec_cart_qty(id).subscribe((res:any)=>{
      this.ngOnInit();
    });
  }

  removeCartQty(id:any){
    this.api.remove_cart_qty(id).subscribe((res:any)=>{
      this.ngOnInit();
      this.api.for_cart();
    });
  }
}
