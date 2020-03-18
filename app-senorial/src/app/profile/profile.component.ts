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

  constructor(private storage: Storage) {
    this.user = new ModelUser();
   }

  ngOnInit() {
    this.storage.get('user').then((value) => {
      this.user = value;
    });
  }
}
