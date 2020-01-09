import { Component } from '@angular/core';
import { ServiceService } from '../services/service/service.service';
import { ServiceComponent } from '../service/service.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public services: Array<any>;

  constructor(private service: ServiceService, public modalController: ModalController) {
    this.services = new Array<any>();
    this.loadServices();
    //this.testServices();
  }

  private testServices() {
    this.services = new Array<any>();
    this.services.push({ id_category: 1, name: "Lavado de auto", icon: "car", color: "secondary" });
    this.services.push({ id_category: 2, name: "Aseo general", icon: "contacts", color: "danger" });
    this.services.push({ id_category: 3, name: "Limpieza de piscina", icon: "help-buoy", color: "medium" });
    this.services.push({ id_category: 4, name: "Jardineria", icon: "partly-sunny", color: "tertiary" });
    console.log(this.services);

  }

  private loadServices() {
    this.service.loadServices().subscribe(
      res => {
        if (res['responseCode'] == 200) {
          this.services = res['object'];
          console.log(this.services);

        } else {
          alert("Ocurrio un error");
        }
      },
      error =>
        console.log(error)
    );
    //this.service.disconect();
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
