import { AuthService } from './services/auth/auth.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { timer } from 'rxjs';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  showSplash = true;
  userName: string = "";

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
    private menuCtrl: MenuController,
    private storage: Storage,
    private router: Router,
    private auth: AuthService
  ) {
    this.menuCtrl.enable(true);
    this.initializeApp();
    this.storage.get('user').then((value) => {
      this.userName = value.nombre + " " + value.apellido;
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      timer(3000).subscribe(() => this.showSplash = false)
    });
  }

  salir() {
    this.storage.clear();
    this.menuCtrl.enable(false);
    this.router.navigate(["/init"]);
    this.auth.logout();
  }

  isLogin() {
    this.storage.get('user').then((value) => {
      return value;
    });
  }
}
