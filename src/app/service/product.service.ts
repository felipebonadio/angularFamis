import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../model/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  entityUrl = 'http://localhost:8080/products';  

  constructor(private http: HttpClient) {    
  }

  getProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(this.entityUrl);
  }

  getProductById(id: string): Observable<Products> {
    return this.http.get<Products>(this.entityUrl + '/' + id);
  }

  createProduct(products: Products): Observable<Products> {
    return this.http.post<Products>(this.entityUrl, products);
  }

  deleteProduct(productId: string): Observable<string> {
    return this.http.delete<string>(this.entityUrl + '/' + productId);
  }
  
  updateProduct(products: Products): Observable<Products> {
    return this.http.put<Products>(this.entityUrl, products);
  }
}
