import { Routes } from '@angular/router';
import { OktaAuthGuard, OktaCallbackComponent } from '@okta/okta-angular';

export const routes: Routes = [
  {
    path: ' ',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { path: 'login/callback', component: OktaCallbackComponent },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),//canActivate:[OktaAuthGuard],
    children: [{
      path: 'designs',
      loadComponent: () => import('./pages/design/design.page').then( m => m.DesignPage)
    },
    
    {
      path: 'soldDesigns',
      loadComponent: () => import('./pages/sold-design/sold-design.page').then( m => m.SoldDesignPage)
    },]
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  
];
