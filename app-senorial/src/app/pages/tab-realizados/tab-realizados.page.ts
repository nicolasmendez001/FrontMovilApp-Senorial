import { AlertService } from './../../services/Alert/alert.service';
import { ModelService } from 'src/Models/ModelService';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service/service.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab-realizados',
  templateUrl: './tab-realizados.page.html',
  styleUrls: ['./tab-realizados.page.scss'],
})
export class TabRealizadosPage implements OnInit {

  public services: Array<any>;
  public comment: String = "";

  constructor(private service: ServiceService, private alert: AlertService, private storage: Storage) { }

  ngOnInit() {
    this.services = new Array<any>();
    this.loadServices();
  }

  private loadServices() {
    this.storage.get('user').then((value) => {
      this.getServices(value.id_user);
    });
    
  }

  private getServices(id_user: number) {
    this.service.getServices(id_user, "realizado").subscribe(
      res => {
        console.log(res);
        if (res['responseCode'] == 200) {
          this.services = res['object'];
        }
      },
      error =>
        console.log(error)
    );
  }

  btnAddComment(item) {
    if (item.addComment) {
      item.addComment = false;
    } else {
      item.addComment = true;
    }

  }

  saveComment(item) {
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
