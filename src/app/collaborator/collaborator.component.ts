import { Component, OnInit } from '@angular/core';
import { Collaborator } from '../model/collaborator';
import { CollaboratorService } from '../service/collaborator.service';
import { Restaurant } from '../model/restaurant';

@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.css'],
})
export class CollaboratorComponent implements OnInit {
  collaborators: Collaborator[] = [];
  restaurant: Restaurant = {} as Restaurant;

  constructor(private collaboratorService: CollaboratorService) {}

  ngOnInit(): void {
    this.collaboratorService
      .getCollaborators()
      .subscribe((collaborators) => (this.collaborators = collaborators));
  }
}
