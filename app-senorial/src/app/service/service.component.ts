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
  public serviceData: any;
  public selectService: string;


  myDate: String;

  constructor(private modalCtrl: ModalController, private pickerCtrl: PickerController,
    private service: UserService) {
    this.myDate = this.calcualteMinDate(0);
    this.serviceData = { title: "Tipo de servicio", opciones: ["4 horas", "8 horas"] };
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
    fromDate: this.calcualteMinDate(1), // default null
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
    return this.direction == "" || (typeof this.selectService === 'undefined');
  }

  /**
   * next
   */
  public next() {
    alert(this.selectService);
  }
}
