import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private api:ApiService){}

  endpoint:string = "https://a2zithub.org/dairy/abi/";

  productList:any;

  ngOnInit(){
    this.getProductList();
  }

  getProductList(){
    this.api.productList().subscribe((res)=>{
      this.productList = res;
    })
  }

  addtocart(){
    this.api.addtocart(this.productList.product_tbl_id).subscribe((res)=>{
      this.ngOnInit(); 
    });
  }

}
