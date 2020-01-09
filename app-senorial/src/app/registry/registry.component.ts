import { LoginComponent } from './../login/login.component';
import { UserService } from './../services/user/user.service';
import { ModelUser } from './../../Models/ModelUser';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.scss'],
})
export class RegistryComponent implements OnInit {

  user: ModelUser;
  pass: String = "";

  constructor(private service: UserService, private router: Router, public modalController: ModalController) {
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

  saveRegistry() {
    //alert("Save data -> " + this.user.nombre);
    console.log(this.user);
   }

  onSubmit() {
    this.validateDataUser();
  }

  private validateDataUser() {
    console.log(this.user.contrasena + " - "+ this.pass);
    
    if (this.user.contrasena != this.pass) {
      alert("Contrase equivocada");
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
