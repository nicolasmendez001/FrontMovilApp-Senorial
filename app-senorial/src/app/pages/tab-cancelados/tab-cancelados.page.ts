import { Component, OnInit } from '@angular/core';
import { ModelService } from 'src/Models/ModelService';
import { ServiceService } from 'src/app/services/service/service.service';

@Component({
  selector: 'app-tab-cancelados',
  templateUrl: './tab-cancelados.page.html',
  styleUrls: ['./tab-cancelados.page.scss'],
})
export class TabCanceladosPage implements OnInit {

  public services: Array<ModelService>;

  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.services = new Array<ModelService>();
    this.loadServices();
  }

  private loadServices() {
    this.service.getServices(1, "rechazado").subscribe(
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
