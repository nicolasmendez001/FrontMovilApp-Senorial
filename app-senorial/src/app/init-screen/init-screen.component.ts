import { Component, OnInit } from '@angular/core';
import { ModalController, MenuController } from '@ionic/angular';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-init-screen',
  templateUrl: './init-screen.component.html',
  styleUrls: ['./init-screen.component.scss'],
})
export class InitScreenComponent implements OnInit {

  ip: string;

  constructor(public modalController: ModalController, private menuCtrl: MenuController) {
    this.menuCtrl.enable(false);
   }

  ngOnInit() { }

  async loginUser() {
    const modal = await this.modalController.create({
      component: LoginComponent,
      componentProps: {
        'data': {}
      }
    });
    await modal.present();
  }
}
