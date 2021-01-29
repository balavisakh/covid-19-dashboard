import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryStatisticsComponent } from './country-statistics/country-statistics.component';

import { DashboardComponent } from './dashboard.component';
import { EditDetailsComponent } from './edit-details/edit-details.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, 
  children: [
    {path: 'home', component: HomeComponent},
    {path: 'statistics', component: CountryStatisticsComponent},
    {path: 'edit-details', component: EditDetailsComponent},
  ]
},
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
