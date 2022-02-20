import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerritoryComponent } from './territory.component';
import { StateListComponent } from './state/state-list/state-list.component';
import { CountryListComponent } from './country/country-list/country-list.component';
import { RouterModule, Routes } from '@angular/router';
import { TerritoryLandingComponent } from './territory-landing/territory-landing.component';
import { CountryComponent } from './country/country.component';


const routes: Routes = [
  {
    path: '',
    component: TerritoryComponent,
    children:[
      {
        path: 'landing',
       component:TerritoryLandingComponent
    },
    {path:'country',redirectTo:'country/list' },
    {
      path: 'country',
      component:CountryComponent,
      children:[
        {
            path:'list',
            component:CountryListComponent
        
        }

      ]
    }
    ]

  }
];

@NgModule({
  declarations: [
    TerritoryComponent,
    StateListComponent,
    CountryListComponent,
    TerritoryLandingComponent,
    CountryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
]
})
export class TerritoryModule { }
