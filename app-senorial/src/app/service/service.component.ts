import { UserService } from './../services/user/user.service';
import { Component, OnInit, Input } from '@angular/core';
import { ModalController, PickerController } from '@ionic/angular';
import { PickerOptions, PickerColumnOption } from '@ionic/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
})
export class ServiceComponent implements OnInit {

  @Input() data: any;

  public direction: string;
  public directions: Array<String>;
  private p: Array<PickerColumnOption>;

  constructor(private modalCtrl: ModalController, private pickerCtrl: PickerController,
    private service: UserService) {

  }

  async close() {
    await this.modalCtrl.dismiss();
  }

  ngOnInit() {
    this.direction = "";
    this.directions = new Array<string>();
    this.loadDirections();
  }

  private loadDirections() {
    this.directions.push("calle 43 # 10 42");
    this.directions.push("calle 21 # 10 42");
    this.directions.push("calle 35 # 10 - 42");

    /*    this.service.loadDirections(myId).subscribe(
          res => {
            console.log(res);
            this.directions = res;
          },
          error =>{
            alert(error);
          }
        );
        */
  }

  /**
   * showPick
   */
  public async showPick() {
    let cancel = true;
    let o = [];

    for (let i = 0; i < this.directions.length; i++) {
      o.push({
        text: this.directions[i]
      });
    }

    let ops: PickerOptions = {
      cssClass: 'academy-picker',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Guardar',
          cssClass: 'special-done',
          handler: (value: any): void => { cancel = false },
        }

      ],
      columns: [
        {
          name: 'direction',
          options: o
        }
      ]
    };

    let picker = await this.pickerCtrl.create(ops);
    picker.present();

    picker.onDidDismiss().then(async data => {
      let col = await picker.getColumn('direction');
      if (!cancel) {
        this.direction = col.options[col.selectedIndex].text;
      }
    });
  }

  /**
   * addNewDir
   */
  public addNewDir() {
    alert("añadir nueva direccion");
  }

  /**
   * isValid
   */
  public isValid(): boolean {
    return (this.direction == "");
  }

  /**
   * next
   */
  public next() {
    alert("siguiente paso");
  }
}
