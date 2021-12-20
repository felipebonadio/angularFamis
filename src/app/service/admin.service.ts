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

  updateRestaurantConsumer(restaurantId: string, restaurant: Restaurant): Observable<Restaurant> {
    return this.http.put<Restaurant>(this.entityUrl + '/' + restaurantId, restaurant);
  }

  
}
