import { Component, OnInit } from '@angular/core';
import { ModelService } from 'src/Models/ModelService';

@Component({
  selector: 'app-tab-pendientes',
  templateUrl: './tab-pendientes.page.html',
  styleUrls: ['./tab-pendientes.page.scss'],
})
export class TabPendientesPage implements OnInit {
  
  public services: Array<ModelService>;

  constructor() { }

  ngOnInit() {
    this.services = new Array<ModelService>();
  }
}
