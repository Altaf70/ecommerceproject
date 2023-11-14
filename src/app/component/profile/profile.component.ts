import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(private api:ApiService){}

  user_info:any;

  ngOnInit(){
    this.api.profile().subscribe((res:any)=>{
      this.user_info = res.data[0];
    })
  };
};
