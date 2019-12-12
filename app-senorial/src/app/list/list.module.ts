import { MyServicesComponent } from './../my-services/my-services.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { ListPage } from './list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ListPage
      },
      {
        path: 'myService',
        component: MyServicesComponent
      }
    ])
  ],
  declarations: [ListPage]
})
export class ListPageModule {}
