import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service/service.service';
import { ServiceComponent } from '../service/service.component';
import { ModalController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public services: Array<any>;

  constructor(private service: ServiceService, public modalController: ModalController, private menuCtrl: MenuController) {
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
        } else {
          alert("Ocurrio un error");
        }
      },
      error =>
        console.log(error)
    );
  }

  public async isSelectService(id: number, name: string) {
    const modal = await this.modalController.create({
      component: ServiceComponent,
      componentProps: {
        'dataModal': { id, name }
      }
    });
    await modal.present();
  }
}

