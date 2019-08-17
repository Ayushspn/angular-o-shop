import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../service/profile.service';
@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {
  private userAddress  = {};
  constructor(private profileService : ProfileService) { }

  ngOnInit() {
    this.profileService.getLoggedInUser().subscribe((userDetails) => {
      if(userDetails){
        debugger
        this.userAddress = userDetails.address; 
      }
     
    })
  }

}
