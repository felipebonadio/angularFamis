import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Colaborador } from '../model/colaborador';

@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {
  entityUrl = 'http://localhost:8080/colaboradores';  

  constructor(private http: HttpClient) {    
  }

  getCollaborators(): Observable<Colaborador[]> {
    return this.http.get<Colaborador[]>(this.entityUrl);
  }

  getCollaboratorById(id: string): Observable<Colaborador> {
    return this.http.get<Colaborador>(this.entityUrl + '/' + id);
  }

  createCollaborator(colaborador: Colaborador): Observable<Colaborador> {
    return this.http.post<Colaborador>(this.entityUrl, colaborador);
  }

  deleteCollaborator(colaboradorId: string): Observable<string> {
    return this.http.delete<string>(this.entityUrl + '/' + colaboradorId);
  }
  updateCollaborator(colaboradorId: string, colaborador: Colaborador): Observable<Colaborador> {
    return this.http.put<Colaborador>(this.entityUrl + '/' + colaboradorId, colaborador);
  }
}
