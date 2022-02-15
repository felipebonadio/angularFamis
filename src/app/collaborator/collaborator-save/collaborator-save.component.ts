import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Address } from 'src/app/model/address';
import { Collaborator } from 'src/app/model/collaborator';
import { Restaurant } from 'src/app/model/restaurant';
import { AdminService } from 'src/app/service/admin.service';
import { CollaboratorService } from 'src/app/service/collaborator.service';

@Component({
  selector: 'app-collaborator-save',
  templateUrl: './collaborator-save.component.html',
  styleUrls: ['./collaborator-save.component.css']
})

export class CollaboratorSaveComponent implements OnInit {
  error: Error | undefined;
  collaborator: Collaborator = {} as Collaborator;;
  collaborators: Collaborator[] =[];
  address: Address = {} as Address;;
  restaurant : Restaurant  = {} as Restaurant;;
  selected : Restaurant = {} as Restaurant;
  
  constructor(
    private formBuilder: FormBuilder,
    private collaboratorService: CollaboratorService,
    private router: Router,
    private adminService: AdminService
  ) {  }

  ngOnInit(): void {
    this.adminService
      .getRestaurants()
      .subscribe((restaurant) => (this.restaurant = restaurant[0]));        
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
      this.collaborator.restaurant = this.restaurant;     

      this.collaboratorService.createCollaborator(collaborator).subscribe(
        (newcollaborator) => {
          this.collaborator = newcollaborator;          
        },
        (error) => (this.error = error as any)
      );
      window.alert("Cadastrado com sucesso!")
      this.router.navigateByUrl("/admin")
    }
  }

}
