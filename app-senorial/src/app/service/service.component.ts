import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
})
export class ServiceComponent implements OnInit {

  @Input() data: any;

  constructor(private modalCtrl: ModalController) { }

  async close() {
    await this.modalCtrl.dismiss();
  }

  ngOnInit() { }

}
