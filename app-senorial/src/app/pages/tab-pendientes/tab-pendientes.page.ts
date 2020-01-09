import { Component, OnInit } from '@angular/core';
import { ModelService } from 'src/Models/ModelService';
import { ServiceService } from 'src/app/services/service/service.service';

@Component({
  selector: 'app-tab-pendientes',
  templateUrl: './tab-pendientes.page.html',
  styleUrls: ['./tab-pendientes.page.scss'],
})
export class TabPendientesPage implements OnInit {

  public services: Array<any>;

  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.services = new Array<any>();
    this.loadPendientes();
  }

  private loadPendientes() {
    this.service.getServices(1, "pendiente").subscribe(
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
