import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss'],
})

export class HelpComponent implements OnInit {

  constructor(private emailComposer: EmailComposer) { }

  ngOnInit() {}

  enviarCorreo() {
    let email = {
      to: 'anmp001@gmail.com',
      subject: 'AYUDA APLICACIÓN APP-SEÑORIAL',
      body: 'Tu comentario: ',
      isHtml: true
    };

    this.emailComposer.isAvailable().then((available: boolean) =>{
      if(available) {
        //Now we know we can send
      }
     });
    this.emailComposer.open(email);
  }

}
