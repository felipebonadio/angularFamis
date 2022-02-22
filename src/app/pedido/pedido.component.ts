import { Component, OnInit } from '@angular/core';
import { Mesa } from '../model/mesa';
import { Restaurante } from '../model/restaurante';
import { AdminService } from '../service/admin.service';
import { MesaService } from '../service/mesa.service';

@Component({
  selector: 'app-order',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css'],
})
export class PedidoComponent implements OnInit {
  
  restaurante: Restaurante = {} as Restaurante;
  mesa: Mesa = {} as Mesa;

  constructor(private adminService: AdminService, private mesaService: MesaService) {    
  }

  ngOnInit(): void {
    this.adminService
      .getRestaurants()
      .subscribe((restaurant) => (this.restaurante = restaurant[0]));
  }

  abrirMesa(numero: number){
    this.restaurante.quantidadeMesa = this.mesa.numero;
    this.mesaService.createMesaByNumero(numero).subscribe(mesa => this.mesa = mesa);
  }
}
