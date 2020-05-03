import { ModelUser } from '../../../Models/ModelUser';
import { AlertService } from '../../services/Alert/alert.service';
import { ServiceService } from 'src/app/services/service/service.service';
import { UserService } from '../../services/user/user.service';
import { Component, OnInit, Input } from '@angular/core';
import { ModalController, PickerController, AlertController } from '@ionic/angular';
import { PickerOptions, PickerColumnOption } from '@ionic/core';
import { ModelService } from 'src/Models/ModelService';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
})
export class ServiceComponent implements OnInit {

  @Input() dataModal: any;

  public directions: Array<string>;
  public selectService: string;
  public jornadaData: Array<string>;
  public serviceData: ModelService;
  public services: any;
  private userData: ModelUser;

  constructor(private modalCtrl: ModalController, private pickerCtrl: PickerController,
    private serviceUser: UserService, private serviceSer: ServiceService, private alertController: AlertController,
    private alert: AlertService, private storage: Storage) {
  }

  ngOnInit() {
    this.jornadaData = new Array<string>();
    this.directions = new Array<string>();
    this.serviceData = new ModelService();
    this.loadServices(this.dataModal.id);
    this.storage.get('user').then((value) => {
      if (value != null) {
        this.userData = value;
        this.serviceData.setData(this.userData.id_user, this.userData.nombre, this.userData.apellido, this.userData.telefono, this.userData.correo, this.dataModal.name);
        this.serviceData.fecha_servicio = this.calcualteMinDate(0);
        this.serviceData.fecha = this.calcualteMinDate(0);
        this.loadDirections();
        this.loadJornada(new Date());
      }
    }).catch(() => {
      // login de nuevo
    });
  }

  private loadServices(id_category: number) {
    this.serviceSer.getServicesOfType(id_category).subscribe(res => {
      this.services = res['object'][0].servicios;
    },
      () => {
        console.log("Error al cargar");
      })
  }

  private calcualteMinDate(i: number): string {
    let date = new Date();
    let fecha = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate() + i}`
    return fecha;
  }

  sumDays(days: number) {
    var date = new Date();
    date.setDate(date.getDate() + days);
    return date;
  }

  private calculateMaxDate(): string {
    let date = this.sumDays(7);
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  }

  disabledDates: Date[] = [];

  datePickerObj: any = {
    inputDate: new Date(), // default new Date()
    fromDate: this.calcualteMinDate(0), // default null
    toDate: this.calculateMaxDate(), // default null
    showTodayButton: false, // default true
    closeOnSelect: true, // default false
    disableWeekDays: [], // default []
    mondayFirst: true, // default false
    setLabel: 'S',  // default 'Set'
    todayLabel: 'T', // default 'Today'
    closeLabel: 'Cancelar', // default 'Close'
    disabledDates: this.disabledDates, // default []
    titleLabel: 'Fecha del servicio', // default null
    monthsList: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
    weeksList: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"],
    dateFormat: 'YYYY-MM-DD', // default DD MMM YYYY
    clearButton: false, // default true
    momentLocale: 'en-US', // Default 'en-US'
    yearInAscending: true, // Default false
    btnCloseSetInReverse: false, // Default false
    btnProperties: {
      expand: 'block', // Default 'block'
      fill: '', // Default 'solid'
      size: '', // Default 'default'
      disabled: '', // Default false
      strong: '', // Default false
      color: '' // Default ''
    },
    arrowNextPrev: {
      nextArrowSrc: '/assets/derecha.svg',
      prevArrowSrc: '/assets/izquierda.svg'
    }, // This object supports only SVG files.
    highlightedDates: [

    ], // Default [],
    isSundayHighlighted: {
      //fontColor: '#ee88bf' // Default null
    } // Default {}
  };

  async close() {
    await this.modalCtrl.dismiss();
  }

  private loadJornada(date: Date) {
    if (date.getHours() < 12) {
      this.jornadaData = ["Mañana", "Tarde"];
    } else {
      this.jornadaData = ["Tarde"];
    }
  }

  private loadDirections() {
    this.directions = this.userData.direccion;
  }

  public async showPick() {
    let cancel = true;
    let o = [];
    this.loadDirections();
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
        this.serviceData.direccion = col.options[col.selectedIndex].text;
      }
    });
  }

  /**
   * addNewDir
   */
  public addNewDir() {
    this.presentAlert();
  }

  async presentAlert() {
    const alert = await this.alertController.create(
      {
        header: 'Añadir nueva dirección',
        // subHeader: 'Subtitle',
        //message: 'This is an alert message.',
        inputs: [
          {
            name: 'direction',
            placeholder: '*Dirección'
          }
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Confirm Cancel');
            }
          }, {
            text: 'Ok',
            handler: data => {
              this.saveDirection(data.direction);
            }
          }
        ]
      });
    await alert.present();
  }

  private saveDirection(direction: string) {
    this.serviceUser.saveDirection(direction, this.userData.id_user).subscribe(
      () => {
        this.alert.presentToast("La dirección fue guardada", "warning");
        this.serviceData.direccion = direction;
        this.userData.direccion.push(direction);
        this.storage.set('user', this.userData);
      },
      () => {
        this.alert.presentToast("Error al guardar la dirección. Intente mas tarde.", "danger");
      }
    );
  }

  public isValid(): boolean {
    return (this.serviceData.direccion == "" || this.serviceData.tipoServicio == "" || this.serviceData.horario == "");
  }

  public next() {
    this.serviceSer.saveService(this.serviceData).subscribe(
      () => {
        this.alert.presentSaveService("Servicio enviado",
          "RECIBIRÁ UNA LLAMADA PARA CONFIRMAR", "success", 'bottom');
        this.modalCtrl.dismiss();
      },
      () => {
        this.alert.presentToast("Error en la petición del servicio, intentelo más tarde", "danger");
      }
    );
  }

  public changeDate() {
    let date = new Date(this.serviceData.fecha_servicio);
    let hoy = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate() + 1}`;
    let otra = new Date();
    if (hoy == `${otra.getFullYear()}-${otra.getMonth() + 1}-${otra.getDate()}`) {
      this.loadJornada(otra);
    } else {
      this.jornadaData = ["Mañana", "Tarde"];
    }
  }
}