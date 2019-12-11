import { Component } from '@angular/core';
import { ModelService } from 'src/Models/ModelService';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public services: Array<ModelService>;

  constructor() {
    //    this.loadServices();
    this.testServices();
  }

  private testServices() {
    this.services = new Array<ModelService>();
    this.services.push(new ModelService(1,"Lavado de auto", "car"));
    this.services.push(new ModelService(2,"Aseo general", "hand"));
    this.services.push(new ModelService(3,"Limpieza de piscina", "help-buoy"));
    this.services.push(new ModelService(4,"Jardineria", "partly-sunny"));
  }

  private loadServices() {


  }

  /**
   * isSelectService
   */
  public isSelectService(id: number) {
    alert(id);
    
  }


}
