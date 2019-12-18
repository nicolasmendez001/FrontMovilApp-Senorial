import { Component, OnInit } from '@angular/core';
import { ModelService } from 'src/Models/ModelService';

@Component({
  selector: 'app-tab-pendientes',
  templateUrl: './tab-pendientes.page.html',
  styleUrls: ['./tab-pendientes.page.scss'],
})
export class TabPendientesPage implements OnInit {
  
  public services: Array<any>;

  constructor() { }

  ngOnInit() {
    this.services = [
      {nombreCategoria: "Aseo General", direccion: "Calle juarez", fecha_servicio:"20-12-2019", tipoServicio:"4 horas", valor: 20000},
      {nombreCategoria: "Aseo General", direccion: "Calle juarez", fecha_servicio:"20-12-2019", tipoServicio:"4 horas", valor: 25000},
      {nombreCategoria: "Aseo General", direccion: "Calle juarez", fecha_servicio:"20-12-2019", tipoServicio:"4 horas", valor: 32000}
  ];
  }
}
