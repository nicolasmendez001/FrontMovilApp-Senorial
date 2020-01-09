import { UserService } from './../services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private modalCtrl: ModalController, private service: UserService, private router: Router) { }

  ngOnInit() { }

  login(form) {
    console.log(form.value);
    this.service.loginUser(form.value).subscribe(async res => {
      if (res['responseCode'] == 200) {
        alert("Logeado");
        await this.modalCtrl.dismiss();
        this.router.navigate(["/home"]);
      } else {
        alert("Ocurrio un error");
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
