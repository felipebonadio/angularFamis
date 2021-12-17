import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/model/restaurant';
import { HeaderService } from 'src/app/service/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  restaurant : Restaurant;

  constructor(private headerService:HeaderService) { 
    this.restaurant = {} as Restaurant;
  }

  ngOnInit(): void {
    this.headerService.getRestaurants().subscribe((restaurant) => (this.restaurant = restaurant[0]));  
  }

}
