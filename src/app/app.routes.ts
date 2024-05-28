import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AboutUsComponent } from './about.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Home',
    component: HomeComponent,
  },
  {
    path: 'about-us',
    title: 'About Us',
    component: AboutUsComponent,
  },
];
