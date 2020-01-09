import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private toastController: ToastController) { 
    
  }

  async presentToast(message: any, color: string) {
    const toast = await this.toastController.create({
      //header: 'Este es el titulo',
      message: message,
      duration: 2000,
      position: 'bottom',
      color: color
    });
    toast.present();
  }
}
