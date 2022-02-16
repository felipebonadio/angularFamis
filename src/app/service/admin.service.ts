import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restaurante } from '../model/restaurante';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  entityUrl = 'http://localhost:8080/restaurantes';  

  constructor(private http: HttpClient) {    
  }

  getRestaurants(): Observable<Restaurante[]> {
    return this.http.get<Restaurante[]>(this.entityUrl);
  }

  updateConsumerOnRestaurant(restaurant: Restaurante): Observable<Restaurante> {
    return this.http.put<Restaurante>(this.entityUrl+ "/mesa" , restaurant);
  }

  updateTimeOnRestaurant(restaurant: Restaurante): Observable<Restaurante>{
    return this.http.put<Restaurante>(this.entityUrl + "/horario", restaurant);
  }

  getRestaurantById(restaurantId: String): Observable<Restaurante>{
    return this.http.get<Restaurante>(this.entityUrl + "/"+ restaurantId);
  }
  
}
