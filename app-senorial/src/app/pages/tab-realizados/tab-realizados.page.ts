import { ModelService } from 'src/Models/ModelService';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-realizados',
  templateUrl: './tab-realizados.page.html',
  styleUrls: ['./tab-realizados.page.scss'],
})
export class TabRealizadosPage implements OnInit {

  public services: Array<any>;
  public comment: String = "";

  constructor() { }

  ngOnInit() {
    this.services = [
      {nombreCategoria: "Aseo General", direccion: "Calle juarez", fecha_servicio:"20-12-2019", tipoServicio:"4 horas", valor: 20000, comentario:""},
      {nombreCategoria: "Aseo General", direccion: "Calle juarez", fecha_servicio:"20-12-2019", tipoServicio:"4 horas", valor: 25000, comentario:"Es muy buen servicio, todos los trabajadores son super..."},
      {nombreCategoria: "Aseo General", direccion: "Calle juarez", fecha_servicio:"20-12-2019", tipoServicio:"4 horas", valor: 32000, comentario:"", addCommend: false}
  ];
  }

  btnAddComment(item){
    if (item.addComment) {
      item.addComment = false;
    }else{
      item.addComment = true;
    }

  }

  saveComment(item){
    console.log("Item", item);
    
    item.comentario = this.comment;
    this.comment = "";
    console.log(this.services);
    
  }

}
