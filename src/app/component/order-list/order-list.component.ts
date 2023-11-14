import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  constructor(private api:ApiService){}

  order_list:any;

  ngOnInit(){
    this.api.order_list().subscribe((res:any)=>{
      this.order_list = res.order_det;
    })
  }

}
