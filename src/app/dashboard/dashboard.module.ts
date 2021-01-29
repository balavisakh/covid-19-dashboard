import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CountryStatisticsComponent } from './country-statistics/country-statistics.component';
import { HomeComponent } from './home/home.component';
import { MatCardModule } from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { NumberSuffixPipe } from './pipe/number-suffix.pipe';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditDetailsComponent } from './edit-details/edit-details.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';
@NgModule({
  declarations: [DashboardComponent, SideNavComponent, CountryStatisticsComponent, HomeComponent, NumberSuffixPipe, EditDetailsComponent,],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule,
    Ng2SearchPipeModule,
    FormsModule,
    MatPaginatorModule,
    MatSelectModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
