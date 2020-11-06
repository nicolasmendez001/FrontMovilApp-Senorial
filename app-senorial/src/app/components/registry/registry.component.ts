import { AuthService } from './../../services/auth/auth.service';
import { LoginComponent } from './../login/login.component';
import { UserService } from '../../services/user/user.service';
import { ModelUser } from '../../../Models/ModelUser';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AlertService } from '../../services/Alert/alert.service';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.scss'],
})
export class RegistryComponent implements OnInit {

  user: ModelUser;
  pass: string = "";
  confirmPass: string = "";

  constructor(private service: UserService, private router: Router, public modalController: ModalController,
    private alert: AlertService, private authService: AuthService) {
    this.user = new ModelUser();
  }

  ngOnInit() { }

  onSubmit() {
    this.validateDataUser();
  }

  private validateDataUser() {
    if (this.confirmPass != this.pass) {
      this.alert.presentToast("Las contraseñas no coinciden", "danger");
    }
    else {
      this.saveUser();
    }
  }

  private saveUser() {
    this.authService.register(this.user.correo, this.pass).then(auth => {
      let aux: any = auth;
      this.saveBack(aux.user.uid);
    }).catch(err => {
      if (err.code === "auth/email-already-in-use") {
        this.alert.presentToast("La dirección de correo electrónico ya está en uso por otra cuenta.", "danger");
      }
    });
  }

  saveBack(aux: string) {
    this.user.uID = aux;
    this.service.saveUser(this.user).subscribe(
      res => {
        if (res['status'] == 200) {
          this.alert.presentSaveService("Usuario guardado",
            "Se ha enviado un email, por favor confirmar e inicie sesión en la app.", "primary", 'bottom');
          this.sendConfirm();
          this.router.navigate(["/init"]);
        } else {
          alert("Ocurrio un error");
        }
      },
      error =>
        console.log(error)
    );
  }

  sendConfirm() {
    this.authService.verifyEmail();
  }
}
