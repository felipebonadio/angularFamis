import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ModalService } from '../service/modal.service';
import { Address } from '../model/address';
import { Collaborator } from '../model/collaborator';
import { CollaboratorService } from '../service/collaborator.service';

@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.css'],
})
export class CollaboratorComponent implements OnInit {
  error: Error | undefined;
  collaborator: Collaborator;
  collaborators: Collaborator[];
  address: Address;

  constructor(
    private modalService: ModalService,
    private formBuilder: FormBuilder,
    private collaboratorService: CollaboratorService
  ) {
    this.collaborator = {} as Collaborator;
    this.address = {} as Address;
    this.collaborators = [];
  }

  ngOnInit(): void {
    this.collaboratorService
      .getCollaborators()
      .subscribe((collaborators) => (this.collaborators = collaborators));
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  collaboratorForm = this.formBuilder.group({
    name: '',
    lastName: '',
    phone: '',
    cpf: '',
    role: '',
    email: '',
    password: '',
    addressCep: '',
    addressPlace: '',
    addressNumber: '',
    addressDistrict: '',
    addressCity: '',
    addressState: '',
  });

  onSave(collaborator: Collaborator) {
    if (this.collaboratorForm.value.name !== '') {
      this.collaborator.name = this.collaboratorForm.value.name;
      this.collaborator.lastName = this.collaboratorForm.value.lastName;
      this.collaborator.phone = this.collaboratorForm.value.phone;
      this.collaborator.cpf = this.collaboratorForm.value.cpf;
      this.collaborator.role = this.collaboratorForm.value.role;
      this.collaborator.email = this.collaboratorForm.value.email;
      this.collaborator.password = this.collaboratorForm.value.password;
      this.address.cep = this.collaboratorForm.value.addressCep;
      this.address.place = this.collaboratorForm.value.addressPlace;
      this.address.number = this.collaboratorForm.value.addressNumber;
      this.address.district = this.collaboratorForm.value.addressDistrict;
      this.address.city = this.collaboratorForm.value.addressCity;
      this.address.state = this.collaboratorForm.value.addressState;
      this.collaborator.address = this.address;

      this.collaboratorService.createCollaborator(collaborator).subscribe(
        (newcollaborator) => {
          this.collaborator = newcollaborator;
        },
        (error) => (this.error = error as any)
      );
      window.location.reload();
    }
  }
}
