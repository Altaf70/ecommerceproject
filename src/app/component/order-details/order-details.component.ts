import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  constructor(private api:ApiService,private activate:ActivatedRoute,private router:Router){}
  order_id:any;
  order_details:any;
  order_products:any;

  ngOnInit(){
    this.activate.params.subscribe((res:any)=>{
      this.order_id = res.order_id;
      this.api.order_det(this.order_id).subscribe((res1:any)=>{
        this.order_details = res1.order_det[0];
        this.order_products = res1.order_products; 
      });
    });
  };

};