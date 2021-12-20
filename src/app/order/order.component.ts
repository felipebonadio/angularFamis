import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../model/restaurant';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  restaurant : Restaurant;
  consumer : number;

  
  constructor(private adminService: AdminService) {
    this.restaurant = {} as Restaurant;
    this.consumer = this.restaurant.consumer;
   }
   

  ngOnInit(): void {
    this.adminService
      .getRestaurants()
      .subscribe((restaurant) => (this.restaurant = restaurant[0]));
  }

}
