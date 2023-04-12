import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
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
