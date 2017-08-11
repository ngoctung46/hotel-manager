import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportComponent } from './report.component';
import { OrderService } from '../main/order.service';
import { RouterModule } from '@angular/router';
import { DailyReportComponent } from './daily-report/daily-report.component';
import { MonthlyReportComponent } from './monthly-report/monthly-report.component';
import { PeriodicalReportComponent } from './periodical-report/periodical-report.component';
import { ReportRoutingModule } from './reports-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReportRoutingModule
  ],
  declarations: [
    ReportComponent,
    DailyReportComponent,
    MonthlyReportComponent,
    PeriodicalReportComponent
  ],
  providers: [ OrderService ]
})
export class ReportModule { }
