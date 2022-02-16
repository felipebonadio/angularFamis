import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restaurante } from '../model/restaurante';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  entityUrl = 'http://localhost:8080/restaurantes';  

  constructor(private http: HttpClient) {    
  }

  getRestaurants(): Observable<Restaurante[]> {
    return this.http.get<Restaurante[]>(this.entityUrl);
  }

  getRestaurantById(restaurantId: String): Observable<Restaurante>{
    return this.http.get<Restaurante>(this.entityUrl + "/"+ restaurantId);
  }
}
