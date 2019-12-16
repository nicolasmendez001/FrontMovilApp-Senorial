import { Component } from '@angular/core';
import { ModelService } from 'src/Models/ModelService';
import { ServiceService } from '../services/service/service.service';
import { error } from 'util';
import { ServiceComponent } from '../service/service.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public services: Array<ModelService>;

  constructor(private service: ServiceService, public modalController: ModalController) {
    //    this.loadServices();
    this.testServices();
  }

  private testServices() {
    this.services = new Array<ModelService>();
    this.services.push(new ModelService(1, "Lavado de auto", "car", "secondary"));
    this.services.push(new ModelService(2, "Aseo general", "contacts", "danger"));
    this.services.push(new ModelService(3, "Limpieza de piscina", "help-buoy", "medium"));
    this.services.push(new ModelService(4, "Jardineria", "partly-sunny", "tertiary"));
    console.log(this.services);

  }

  private loadServices() {
    this.service.loadServices().subscribe(
      res => {
        this.services = res;
      },
      error => alert(error)
    );

  }

  /**
   * isSelectService
   */
  public async isSelectService(id: number, name: string) {
    const modal = await this.modalController.create({
      component: ServiceComponent,
      componentProps: {
        'data': {id, name}
      }
    });
    await modal.present();

    /*
this.service.getDataService(id).subscribe(
  res => {
    console.log(res);
  },
  error =>{
    alert(error);
  }
);

*/
  }


}
