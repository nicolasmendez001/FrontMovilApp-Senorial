import { LoginComponent } from './../login/login.component';
import { UserService } from './../services/user/user.service';
import { ModelUser } from './../../Models/ModelUser';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AlertService } from '../services/Alert/alert.service';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.scss'],
})
export class RegistryComponent implements OnInit {

  user: ModelUser;
  pass: String = "";

  constructor(private service: UserService, private router: Router, public modalController: ModalController,
    private alert: AlertService) {
    this.user = new ModelUser();
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

  onSubmit() {
    this.validateDataUser();
  }

  private validateDataUser() {
    if (this.user.contrasena != this.pass) {
      this.alert.presentToast("Las contraseñas no coinciden", "danger");
   // }else if () {
    }
    else{
      this.saveUser();
    }
  }

  private saveUser(){
    console.log("Usuario a guardar", this.user);
    this.service.saveUser(this.user).subscribe(
      res => {
        if (res['status'] == 200) {
          console.log(res);
          
          alert("Usuario guardado");
          this.router.navigate(["/home"]);
        } else {
          alert("Ocurrio un error");
        }
      },
      error =>
        console.log(error)
    );
    //this.service.disconect();
  }
}
