import { UserService } from './../../services/user/user.service';
import { AuthService } from '../../services/auth/auth.service';
import { AlertService } from '../../services/Alert/alert.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  constructor(private service: AuthService, private router: Router,
    private alert: AlertService, private storage: Storage, private serviceUser: UserService,
    private menuCtrl: MenuController) { }

  login(form: any) {
    this.service.login(form.value.email, form.value.password).then(async res => {
      var user: any = res;
      this.isVerified(user.user.emailVerified, user.user.uid);
    }).catch(
      () => {
        this.alert.presentToast("Error al iniciar sesión", "danger")
      });
  }

  isVerified(isVerified: boolean, uid: string) {
    if (isVerified) {
      this.loadDataUser(uid);
    } else {
      this.alert.presentSaveService("Por favor verifica el correo en el link que se ha enviado a tu email.", "", "primary", 'bottom')
    }
  }

  loadDataUser(uid: string) {
    this.serviceUser.loginUser(uid).subscribe(res => {
      if (res['responseCode'] == 200) {
        this.storage.set('user', res['object'][0]);
        this.alert.presentToast("Sesión iniciada", "success");
        this.menuCtrl.enable(true);
        this.router.navigate(["/home"]);
      } else {
        this.alert.presentToast("Error al iniciar sesión", "danger");
      }
    },
      () => {
        this.alert.presentToast("Error al iniciar sesión", "danger");
      })
  }
}