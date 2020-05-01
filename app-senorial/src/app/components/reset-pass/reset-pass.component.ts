import { Router } from '@angular/router';
import { AlertService } from './../../services/Alert/alert.service';
import { AuthService } from './../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.component.html',
  styleUrls: ['./reset-pass.component.scss'],
})
export class ResetPassComponent implements OnInit {

  email: string = "";

  constructor(private authService: AuthService, private alert: AlertService, private router: Router) { }

  ngOnInit() { }

  sendResPass() {
    this.authService.resetPass(this.email).then(() => {
      this.alert.presentToast("se ha enviado un email para restaurar la contraseña", "primary");
      this.router.navigate(['/login']);
    }).catch(() => {
      this.alert.presentToast("Por favor verifique el email", "danger");
    })
  }
}
