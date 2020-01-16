import { InitScreenComponent } from './init-screen/init-screen.component';
import { LoginComponent } from './login/login.component';
import { RegistryComponent } from './registry/registry.component';
import { TabsPageModule } from './pages/tabs/tabs.module';
import { HelpComponent } from './help/help.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ServiceComponent } from './service/service.component';
import { TabsPage } from './pages/tabs/tabs.page';
import { Ionic4DatepickerModule } from
    '@logisticinfotech/ionic4-datepicker';
import { SocketIoModule, SocketIoConfig} from 'ngx-socket-io';
import { APP_URL } from './constants';
import { IonicStorageModule } from '@ionic/storage';

const config : SocketIoConfig = {url: APP_URL, options: {}};

@NgModule({
  declarations: [
    AppComponent, ServiceComponent, AboutUsComponent, HelpComponent, RegistryComponent, LoginComponent, InitScreenComponent],
  entryComponents: [ServiceComponent, TabsPage, LoginComponent],


  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    TabsPageModule,
    Ionic4DatepickerModule,
    SocketIoModule.forRoot(config),
    IonicStorageModule.forRoot()
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
