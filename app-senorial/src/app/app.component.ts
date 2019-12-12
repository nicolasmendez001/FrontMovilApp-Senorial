import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
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
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
