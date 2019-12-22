import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HighchartsChartModule } from 'highcharts-angular';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlexLayoutModule,
    HighchartsChartModule

  ],
  exports: [
    CommonModule,
    FlexLayoutModule,
    HighchartsChartModule

  ]
})
export class SharedModule { }
