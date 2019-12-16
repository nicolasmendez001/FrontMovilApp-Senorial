import { ModelService } from 'src/Models/ModelService';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-realizados',
  templateUrl: './tab-realizados.page.html',
  styleUrls: ['./tab-realizados.page.scss'],
})
export class TabRealizadosPage implements OnInit {

  public services: Array<ModelService>;

  constructor() { }

  ngOnInit() {
    this.services = new Array<ModelService>();
  }

}
