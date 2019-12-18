import { ModelUser } from './../../Models/ModelUser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.scss'],
})
export class RegistryComponent implements OnInit {

  user: ModelUser;

  constructor() {
    this.user = new ModelUser();
   }

  ngOnInit() {}

  loginUser(){
    alert("Logearse");
  }

  saveRegistry(){
    //alert("Save data -> " + this.user.nombre);
    console.log(this.user);
    
  }

  onSubmit(){
    console.log("Usuario a guardar",this.user);
    
  }

}
