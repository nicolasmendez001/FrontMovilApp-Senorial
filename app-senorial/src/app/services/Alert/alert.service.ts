import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private toastController: ToastController) { 
    
  }

  async presentToast(message: string, color: string) {
    const toast = await this.toastController.create({
      //header: 'Este es el titulo',
      message: message,
      duration: 2000,
      position: 'bottom',
      color: color
    });
    toast.present();
  }

  async presentSaveService(header: string, message: string, color: string, position: any){
    const toast = await this.toastController.create({
      header: header,
      message: message,
      position: position,
      color: color,
      buttons: [
        {
          text: 'OK',
          role: 'cancel',
          icon: 'checkmark',
          cssClass: 'secondary',
        }
      ]
    });
    toast.present();
  }
}
