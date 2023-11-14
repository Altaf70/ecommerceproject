import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http:HttpClient){}

  endpoint:string = "https://a2zithub.org/dairy/abi/";

  getCatList(){

    return this.http.get(this.endpoint+'product_cat_details');
  }

  register(data:any){

    return this.http.post(this.endpoint+'user_register',data);
  }

  productList(){
    
    return this.http.get(this.endpoint+'product_det');
  }

  login(data:any){
    return this.http.post(this.endpoint+'user_login',data)
  }

  productByCat(data:any){
    return this.http.post(this.endpoint+'products_by_cat',data)
  }

  product_by_id(id:any){
    var obj = {"product_id":id,"token":localStorage.getItem('token')}
    return this.http.post(this.endpoint+'product_by_id',obj)
  }

  addtocart(id:any){
    var obj = {"product_id":id,"token":localStorage.getItem('token')}
    return this.http.post(this.endpoint+'addtocart',obj)
  }

  cart_list(){
    var obj = {"token":localStorage.getItem('token')}
    return this.http.post(this.endpoint+'cart_list',obj)
  }

  inc_cart_qty(id:any){
    var obj ={'token':localStorage.getItem('token'),"product_econ_cart_id":id}
    return this.http.post(this.endpoint+'inc_cart_qty',obj)
  }
  
  dec_cart_qty(id:any){
    var obj ={'token':localStorage.getItem('token'),"product_econ_cart_id":id}
    return this.http.post(this.endpoint+'dec_cart_qty',obj)
  }

  remove_cart_qty(id:any){
    var obj ={'token':localStorage.getItem('token'),"product_econ_cart_id":id}
    return this.http.post(this.endpoint+'remove_cart_qty',obj)
  }

  cart_event:Subject<any> = new Subject();
  for_cart(){
    this.cart_event.next('cart');
    console.log();
  }

  place_order(data:any){
    data.token = localStorage.getItem('token');
    return this.http.post(this.endpoint+'place_order',data)
  }

  order_det(order_id:any){
    var obj = {'token':localStorage.getItem('token'),'order_id':order_id}
    return this.http.post(this.endpoint+'order_det',obj);
  };

  order_list(){
    var obj = {'token':localStorage.getItem('token')}
    return this.http.post(this.endpoint+'order_list',obj)
  };

  profile(){
    var obj = {'token':localStorage.getItem('token')}
    return this.http.post(this.endpoint+'user_profile',obj)
  }

  
};