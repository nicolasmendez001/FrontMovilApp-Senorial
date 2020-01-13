import { AlertService } from './../services/Alert/alert.service';
import { UserService } from './../services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private modalCtrl: ModalController, private service: UserService, private router: Router,
    private alert: AlertService, private storage: Storage) { }

  ngOnInit() { }

  login(form) {
    this.service.loginUser(form.value).subscribe(
      async res => {
        if (res['responseCode'] == 200) {
          console.log("Objeto de inicio", res['object'][0]);
          this.storage.set('user', res['object'][0]);
          this.alert.presentToast("Sesión iniciada", "success");
          await this.modalCtrl.dismiss();
          this.router.navigate(["/home"]);
        } else {
          this.alert.presentToast("Error al iniciar sesión", "danger");
        }
      },
      error =>
        console.log(error)
    );
  }



  async close() {
    await this.modalCtrl.dismiss();
  }

}
