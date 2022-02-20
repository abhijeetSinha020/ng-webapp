import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { RouterModule, Routes } from '@angular/router';
import { SettingsLandingComponent } from './settings-landing/settings-landing.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
    children:[
      {
        path:'landing',
        component:SettingsLandingComponent
      },
      {
        path: 'territory',
        loadChildren: () => import('./territory/territory.module').then(m => m.TerritoryModule)
    },
    ],
    

  },
  
];

@NgModule({
  declarations: [
    SettingsComponent,
    SettingsLandingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
]
})
export class SettingsModule { }
