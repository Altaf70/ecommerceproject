import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-cat-product',
  templateUrl: './cat-product.component.html',
  styleUrls: ['./cat-product.component.css']
})
export class CatProductComponent {
  constructor(private api:ApiService,private route:ActivatedRoute){

    this.route.params.subscribe((res)=>{
      this.cat_id = res['id'];
      this.getProductList(this.cat_id);
    });
  };

  endpoint:string = "https://a2zithub.org/dairy/abi/";
  cat_id:number = 0;

  productList:any;
  
  getProductList(id:any){
    var obj = {"cat_id":id}
    this.api.productByCat(obj).subscribe((res)=>{
      this.productList = res;
    })
  }

}
