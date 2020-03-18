import { Component, OnInit } from '@angular/core';
import { ModelService } from 'src/Models/ModelService';
import { ServiceService } from 'src/app/services/service/service.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab-cancelados',
  templateUrl: './tab-cancelados.page.html',
  styleUrls: ['./tab-cancelados.page.scss'],
})
export class TabCanceladosPage implements OnInit {

  public services: Array<ModelService>;

  constructor(private service: ServiceService, private storage: Storage) { }

  ngOnInit() {
    this.services = new Array<ModelService>();
    this.loadServices();
  }

  private loadServices() {
    this.storage.get('user').then((value) => {
      this.getServices(value.id_user);
    });
    
  }

  private getServices(id_user: number) {
    this.service.getServices(id_user, "rechazado").subscribe(
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

}
