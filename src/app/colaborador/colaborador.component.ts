import { Component, OnInit } from '@angular/core';
import { Colaborador } from '../model/colaborador';
import { ColaboradorService } from '../service/colaborador.service';
import { Restaurante } from '../model/restaurante';

@Component({
  selector: 'app-collaborator',
  templateUrl: './colaborador.component.html',
  styleUrls: ['./colaborador.component.css'],
})
export class ColaboradorComponent implements OnInit {
  colaboradores: Colaborador[] = [];
  restaurante: Restaurante = {} as Restaurante;

  constructor(private collaboratorService: ColaboradorService) {}

  ngOnInit(): void {
    this.collaboratorService
      .getCollaborators()
      .subscribe((colaboradores) => (this.colaboradores = colaboradores));
  }
}
