import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent {
  constructor(private api:ApiService,private route:ActivatedRoute){
    this.route.params.subscribe((res:any)=>{
      this.product_id = res.p_id;
    });
  }

  public product_id:any;
  public product_info:any;

  ngOnInit(){    
    this.api.product_by_id(this.product_id).subscribe((res)=>{
      this.product_info = res;
    })
  }

  addtocart(){
    this.api.addtocart(this.product_id).subscribe((res)=>{
      this.api.for_cart();
      this.ngOnInit(); 
    });
  }
};
