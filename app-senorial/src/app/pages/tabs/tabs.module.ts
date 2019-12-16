import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'myServices',
    component: TabsPage,
    children: [
      {
        path: 'tab-pendientes',
        children: [{
          path: '',
          loadChildren: '../tab-pendientes/tab-pendientes.module#TabPendientesPageModule'
        },
        ]
      },
      {
        path: 'tab-realizados',
        children: [{
          path: '',
          loadChildren: '../tab-realizados/tab-realizados.module#TabRealizadosPageModule'
        }
        ]
      },
      {
        path: 'tab-cancelados',
        children: [{
          path: '',
          loadChildren: '../tab-cancelados/tab-cancelados.module#TabCanceladosPageModule'
        }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: 'myServices/tab-pendientes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(
      routes
    )
  ],
  declarations: [TabsPage],
})
export class TabsPageModule { }
