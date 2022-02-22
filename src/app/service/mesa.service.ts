import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mesa } from '../model/mesa';

@Injectable({
  providedIn: 'root'
})
export class MesaService {

  entityUrl = 'http://localhost:8080/mesas';  

  constructor(private http: HttpClient) {    
  }

  getMesas(): Observable<Mesa[]> {
    return this.http.get<Mesa[]>(this.entityUrl);
  }

  getMesaById(id: string): Observable<Mesa> {
    return this.http.get<Mesa>(this.entityUrl + '/' + id);
  }

  createMesa(mesa: Mesa): Observable<Mesa> {
    return this.http.post<Mesa>(this.entityUrl, mesa);
  }

  createMesaByNumero(numero: number): Observable<Mesa> {
    return this.http.post<Mesa>(this.entityUrl, numero);
  }



  deleteMesa(mesaId: string): Observable<string> {
    return this.http.delete<string>(this.entityUrl + '/' + mesaId);
  }
  
  updateMesa(mesa: Mesa): Observable<Mesa> {
    return this.http.put<Mesa>(this.entityUrl, mesa);
  }
}
