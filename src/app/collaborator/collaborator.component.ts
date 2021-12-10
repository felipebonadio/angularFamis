import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalService } from '../modal/modal.service';
import { Address } from '../model/address';
import { Collaborator } from '../model/collaborator';
import { CollaboratorService } from './collaborator.service';

@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.css'],
})
export class CollaboratorComponent implements OnInit {

  
  error: Error | undefined;
  constructor(private modalService: ModalService,  private formBuilder: FormBuilder, private router : Router, private collaboratorService: CollaboratorService) {    
  }

  ngOnInit(): void {}
  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  address: Address = {
    id: '',
    cep: '',
    place: '',
    number: '',
    district:'',
    city:'',
    state: ''
  };

  collaborator: Collaborator = {
    name: '',
    lastName: '',
    cpf:'',
    email: '',
    password: '',
    phone: '',
    address: {     
      cep: '',
      place: '',
      number: '',
      district:'',
      city:'',
      state: ''
    }
  };

  onSave(collaborator: Collaborator) {
    this.collaboratorService.createCollaborator(this.collaborator).subscribe( newcollaborator => {
      this.collaborator = newcollaborator;},
         error => this.error = error as any);
         this.router.navigateByUrl(`/collaborators`);
    }      
  }

