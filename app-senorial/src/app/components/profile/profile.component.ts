import { AlertService } from './../../services/Alert/alert.service';
import { UserService } from './../../services/user/user.service';
import { ModelUser } from '../../../Models/ModelUser';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  user: ModelUser;
  showDir: boolean;

  constructor(private storage: Storage, private service: UserService, private alert: AlertService) {
    this.user = new ModelUser();
  }

  ngOnInit() {
    this.showDir = false;
    this.storage.get('user').then((value) => {
      this.user = value;
    });
  }

  saveData() {
    this.service.updateUser(this.user).subscribe(
      res =>{
        if (res['status'] == 200) {
          this.alert.presentToast("Tus datos han sido guardados ", "success");
          this.storage.set('user', this.user);
        } else {
          this.alert.presentToast("error al guardad tus datos", "danger");
        }
      },
      error =>
        console.log(error)
    );
  }

  showMyDir() {
    this.showDir = !this.showDir;
  }

  deleteDir(name: string) {
    this.user.direccion = this.user.direccion.filter(item => item != name);
  }
}