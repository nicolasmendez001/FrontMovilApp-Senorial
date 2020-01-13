import { AlertService } from './../../services/Alert/alert.service';
import { ModelService } from 'src/Models/ModelService';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service/service.service';

@Component({
  selector: 'app-tab-realizados',
  templateUrl: './tab-realizados.page.html',
  styleUrls: ['./tab-realizados.page.scss'],
})
export class TabRealizadosPage implements OnInit {

  public services: Array<any>;
  public comment: String = "";

  constructor(private service: ServiceService, private alert: AlertService) { }

  ngOnInit() {
    this.services = new Array<any>();
    this.loadRealizados();
  }

  private loadRealizados() {
    this.service.getServices(1, "realizado").subscribe(
      res => {
        console.log(res);
        if (res['responseCode'] == 200) {
          this.services = res['object'];
        } else {
          alert("Ocurrio un error");
        }
      },
      error =>
        console.log(error)
    );
    //this.service.disconect();
  }

  btnAddComment(item) {
    if (item.addComment) {
      item.addComment = false;
    } else {
      item.addComment = true;
    }

  }

  saveComment(item) {
    console.log("Item", item);
    item.comentario = this.comment;
    this.service.saveComment(item.id_service, this.comment).subscribe(
      async res => {
        console.log(res);
        if (res['status'] == 200) {
          this.alert.presentToast("El comentario fué guardado ", "warning");
        } else {
          this.alert.presentToast("error al guardad comentario", "danger");
        }
      },
      error =>
        console.log(error)
    );
    this.comment = "";
  }
}
