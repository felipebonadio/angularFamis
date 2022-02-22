import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Restaurante } from '../model/restaurante';
import { AdminService } from '../service/admin.service';
import { ModalService } from '../service/modal.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  error: Error | undefined;

  restaurante: Restaurante;

  constructor(
    private modalService: ModalService,
    private adminService: AdminService,
    private formBuilder: FormBuilder
  ) {
    this.restaurante = {} as Restaurante;
  }

  ngOnInit(): void {
    this.adminService
      .getRestaurants()
      .subscribe((restaurant) => (this.restaurante = restaurant[0]));
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  mesaForm = this.formBuilder.group({
    quantidadeMesa: '',
  });

  restauranteHorarioForm = this.formBuilder.group({
    horarioAbertura: '',
    horarioEncerramento: ''
  })

  onUpdateMesa() {   
    if (this.mesaForm.value.consumer !== '') {      
      this.restaurante.quantidadeMesa = this.mesaForm.value.quantidadeMesa;     
      this.adminService
        .updateConsumerOnRestaurant(this.restaurante)
        .subscribe(
          (newConsumer) => {
            this.restaurante = newConsumer;
            console.warn(newConsumer)
          },         
          (error) => (this.error = error as any)
        );
    }
  }

  onUpdateHorario() {   
    if (this.restauranteHorarioForm.value.openTime !== '') {      
      this.restaurante.horarioAbertura = this.restauranteHorarioForm.value.horarioAbertura;     
      this.restaurante.horarioEncerramento = this.restauranteHorarioForm.value.horarioEncerramento;
      this.adminService
        .updateTimeOnRestaurant(this.restaurante)
        .subscribe(
          (newTime) => {
            this.restaurante = newTime;
            console.warn(newTime)
          },         
          (error) => (this.error = error as any)
        );
    }
  }
}
