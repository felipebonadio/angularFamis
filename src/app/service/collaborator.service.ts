import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Collaborator } from '../model/collaborator';
import { Restaurant } from '../model/restaurant';

@Injectable({
  providedIn: 'root'
})
export class CollaboratorService {
  entityUrl = 'http://localhost:8080/collaborators';
  
  collaborator: Collaborator | undefined;

  constructor(private http: HttpClient) { }

  getCollaborators(): Observable<Collaborator[]> {
    return this.http.get<Collaborator[]>(this.entityUrl);
  }

  getCollaboratorById(id: string): Observable<Collaborator> {
    return this.http.get<Collaborator>(this.entityUrl + '/' + id);
  }

  createCollaborator(Collaborator: Collaborator): Observable<Collaborator> {
    return this.http.post<Collaborator>(this.entityUrl, Collaborator);
  }

  deleteCollaborator(collaboratorId: string): Observable<string> {
    return this.http.delete<string>(this.entityUrl + '/' + collaboratorId);
  }
  updateCollaborator(collaboratorId: string, Collaborator: Collaborator): Observable<Collaborator> {
    return this.http.put<Collaborator>(this.entityUrl + '/' + collaboratorId, Collaborator);
  }
}
