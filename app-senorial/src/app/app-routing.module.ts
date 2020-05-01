import { ResetPassComponent } from './components/reset-pass/reset-pass.component';
import { ProfileComponent } from './components/profile/profile.component';
import { InitScreenComponent } from './components/init-screen/init-screen.component';
import { RegistryComponent } from './components/registry/registry.component';
import { HelpComponent } from './components/help/help.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'init',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./components/home/home.module').then(m => m.HomePageModule),
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
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'resetPass',
    component: ResetPassComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
