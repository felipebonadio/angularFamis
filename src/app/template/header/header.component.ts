import { Component, OnInit } from '@angular/core';
import { Restaurante } from 'src/app/model/restaurante';
import { HeaderService } from 'src/app/service/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  restaurant : Restaurante;

  constructor(private headerService:HeaderService) { 
    this.restaurant = {} as Restaurante;
  }

  ngOnInit(): void {
    this.headerService.getRestaurants().subscribe((restaurant) => (this.restaurant = restaurant[0]));  
  }

}
