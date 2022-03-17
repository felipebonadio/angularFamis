import { Component, OnInit } from '@angular/core';
import { Mesa } from '../model/mesa';
import { MesaService } from '../service/mesa.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  mesas: Mesa[] = [];

  constructor(private mesaService : MesaService) { }

  ngOnInit(): void {
    this.mesaService.getMesas().subscribe(mesas => this.mesas = mesas);
  }

}
