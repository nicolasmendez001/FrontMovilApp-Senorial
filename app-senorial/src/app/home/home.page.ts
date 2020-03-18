import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service/service.service';
import { ServiceComponent } from '../service/service.component';
import { ModalController, MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public services: Array<any>;

  constructor(private service: ServiceService, public modalController: ModalController,
    private storage: Storage, private menuCtrl: MenuController) {
    this.services = new Array<any>();
  }

  ngOnInit() {
    this.menuCtrl.enable(true);
    this.loadServices();
  }

  private loadServices() {
    this.service.loadServices().subscribe(
      res => {
        if (res['responseCode'] == 200) {
          this.services = res['object'];
          console.log(this.services);

        } else {
          alert("Ocurrio un error");
          console.log(res);
        }
      },
      error =>
        console.log(error)
    );
  }

  /**
   * isSelectService
   */
  public async isSelectService(services: any, id: number, name: string) {
    const modal = await this.modalController.create({
      component: ServiceComponent,
      componentProps: {
        'dataModal': { id, name, services }
      }
    });
    await modal.present();
  }
}

