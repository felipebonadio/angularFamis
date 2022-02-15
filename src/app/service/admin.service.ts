import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restaurant } from '../model/restaurant';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  entityUrl = 'http://localhost:8080/restaurants';  

  constructor(private http: HttpClient) {    
  }

  getRestaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(this.entityUrl);
  }

  updateConsumerOnRestaurant(restaurant: Restaurant): Observable<Restaurant> {
    return this.http.put<Restaurant>(this.entityUrl+ "/consumer" , restaurant);
  }

  updateTimeOnRestaurant(restaurant: Restaurant): Observable<Restaurant>{
    return this.http.put<Restaurant>(this.entityUrl + "/time", restaurant);
  }

  getRestaurantById(restaurantId: String): Observable<Restaurant>{
    return this.http.get<Restaurant>(this.entityUrl + "/"+ restaurantId);
  }
  
}
