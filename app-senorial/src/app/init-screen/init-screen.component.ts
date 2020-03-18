import { Component, OnInit } from '@angular/core';
import { ModalController, MenuController } from '@ionic/angular';
import { LoginComponent } from '../login/login.component';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-init-screen',
  templateUrl: './init-screen.component.html',
  styleUrls: ['./init-screen.component.scss'],
})
export class InitScreenComponent implements OnInit {

  ip: string;

  constructor(public modalController: ModalController, private menuCtrl: MenuController,
    private storage: Storage, private router: Router) {
  }

  ngOnInit() {
    this.menuCtrl.enable(false);
    this.storage.get('user').then((value) => {
      if (value != null) {
        this.router.navigate(["/home"]);
      }
    },
      error => {
        //this.router.navigate(["/home"]);
      }
    );
  }

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
