import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../model/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  entityUrl = 'http://localhost:8080/produtos';  

  constructor(private http: HttpClient) {    
  }

  getProducts(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.entityUrl);
  }

  getProductById(id: string): Observable<Produto> {
    return this.http.get<Produto>(this.entityUrl + '/' + id);
  }

  createProduct(products: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.entityUrl, products);
  }

  deleteProduct(productId: string): Observable<string> {
    return this.http.delete<string>(this.entityUrl + '/' + productId);
  }
  
  updateProduct(products: Produto): Observable<Produto> {
    return this.http.put<Produto>(this.entityUrl, products);
  }
}
