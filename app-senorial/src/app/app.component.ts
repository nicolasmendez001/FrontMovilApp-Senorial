import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  showSplash = true;

  public appPages = [
    {
      title: 'Inicio',
      url: '/home',
      icon: 'home',
      color: 'black'
    },
    {
      title: 'Mis servicios',
      url: '/myServices',
      icon: 'pricetags',
      color: ''
    },
    {
      title: 'Acerca de nosotros',
      url: '/aboutUs',
      icon: 'alert',
      color: 'orange'
    },
    {
      title: 'Ayuda',
      url: '/help',
      icon: 'help',
      color: 'green'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menuCtrl: MenuController
  ) {
    this.menuCtrl.enable(true);
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      timer(3000).subscribe(() => this.showSplash = false)
    });
  }
}
