import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service/service.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab-pendientes',
  templateUrl: './tab-pendientes.page.html',
  styleUrls: ['./tab-pendientes.page.scss'],
})
export class TabPendientesPage implements OnInit {

  public services: Array<any>;

  constructor(private service: ServiceService, private storage: Storage) { }

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
    this.service.getServices(id_user, "pendiente").subscribe(
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
