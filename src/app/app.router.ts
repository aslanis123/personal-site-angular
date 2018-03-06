import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppHomeComponent } from './app-home/app-home.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';

export const router: Routes = [
  { path: '',   redirectTo: '/app-home', pathMatch: 'full'},
  { path: 'app-home', component: AppHomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
