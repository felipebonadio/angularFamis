import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restaurant } from '../model/restaurant';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  entityUrl = 'http://localhost:8080/restaurants';  

  constructor(private http: HttpClient) { }

  getRestaurantById(id: string): Observable<Restaurant> {
    return this.http.get<Restaurant>(this.entityUrl + '/' + id);
  }

  getRestaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(this.entityUrl);
  }
}
