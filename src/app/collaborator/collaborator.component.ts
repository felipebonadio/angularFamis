import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ModalService } from '../service/modal.service';
import { Address } from '../model/address';
import { Collaborator } from '../model/collaborator';
import { CollaboratorService } from '../service/collaborator.service';
import { Restaurant } from '../model/restaurant';

@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.css'],
})
export class CollaboratorComponent implements OnInit {
  error: Error | undefined;
  collaborator: Collaborator;
  collaborators: Collaborator[];  
  restaurant: Restaurant;

  constructor(   
    private collaboratorService: CollaboratorService
  ) {
    this.restaurant = {} as Restaurant;
    this.collaborator = {} as Collaborator;    
    this.collaborators = [];
  }

  ngOnInit(): void {
    this.collaboratorService
      .getCollaborators()
      .subscribe((collaborators) => (this.collaborators = collaborators));
  } 
}
