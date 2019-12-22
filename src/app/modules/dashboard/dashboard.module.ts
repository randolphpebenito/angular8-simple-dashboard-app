import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardAnalyticsComponent } from './dashboard-analytics/dashboard-analytics.component';
import { DashboardLocationComponent } from './dashboard-location/dashboard-location.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    DashboardComponent,
    DashboardHeaderComponent,
    DashboardAnalyticsComponent,
    DashboardLocationComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class DashboardModule { }
