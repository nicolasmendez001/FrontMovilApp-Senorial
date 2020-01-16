import { InitScreenComponent } from './init-screen/init-screen.component';
import { RegistryComponent } from './registry/registry.component';
import { HelpComponent } from './help/help.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'init',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'myServices',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'aboutUs',
    component: AboutUsComponent
  },
  {
    path: 'help',
    component: HelpComponent
  },
  {
    path: 'init',
    component: InitScreenComponent
  },
  {
    path: 'registry',
    component: RegistryComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
