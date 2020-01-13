import { AlertService } from './../services/Alert/alert.service';
import { UserService } from './../services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { ModalController} from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private modalCtrl: ModalController, private service: UserService, private router: Router,
    private alert: AlertService) { }

  ngOnInit() { }

  login(form) {
    console.log(form.value);
    this.service.loginUser(form.value).subscribe(
      async res => {
        console.log(res);

        if (res['responseCode'] == 200) {
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
