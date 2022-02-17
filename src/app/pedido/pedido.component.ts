import { Component, OnInit } from '@angular/core';
import { Restaurante } from '../model/restaurante';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-order',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css'],
})
export class PedidoComponent implements OnInit {
  
  restaurante: Restaurante;

  constructor(private adminService: AdminService) {
    this.restaurante = {} as Restaurante;
  }

  ngOnInit(): void {
    this.adminService
      .getRestaurants()
      .subscribe((restaurant) => (this.restaurante = restaurant[0]));
  }
}
