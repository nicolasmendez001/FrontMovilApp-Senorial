import { ModelUser } from './../../Models/ModelUser';
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

  constructor(private storage: Storage) {
    this.user = new ModelUser();
  }

  ngOnInit() {
    this.showDir = false;
    this.storage.get('user').then((value) => {
      this.user = value;
    });
  }

  saveData() {

  }

  showMyDir() {
    this.showDir = !this.showDir;
  }

  deleteDir(name: string) {
    this.user.direccion = this.user.direccion.filter(item => item != name);
  }
}