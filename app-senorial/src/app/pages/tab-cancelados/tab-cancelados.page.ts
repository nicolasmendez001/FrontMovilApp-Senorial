import { Component, OnInit } from '@angular/core';
import { ModelService } from 'src/Models/ModelService';

@Component({
  selector: 'app-tab-cancelados',
  templateUrl: './tab-cancelados.page.html',
  styleUrls: ['./tab-cancelados.page.scss'],
})
export class TabCanceladosPage implements OnInit {

  public services: Array<ModelService>;

  constructor() { }

  ngOnInit() {
    this.services = new Array<ModelService>();
  }

}
