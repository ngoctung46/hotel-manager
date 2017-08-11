import { NgModule }                from '@angular/core';
import { RouterModule, Routes }    from '@angular/router';

import { ReportComponent } from './report.component';
import { DailyReportComponent } from './daily-report/daily-report.component';
import { MonthlyReportComponent } from './monthly-report/monthly-report.component';
import { PeriodicalReportComponent } from './periodical-report/periodical-report.component';
const reportRoutes: Routes = [
    { 
        path: 'reports',
        component: ReportComponent
        // children: [
        //     {
        //         path: 'daily-report',
        //         component: DailyReportComponent
        //     },
        //     {
        //         path: 'montly-report',
        //         component: MonthlyReportComponent
        //     },
        //     {
        //         path: 'periodical-report',
        //         component: PeriodicalReportComponent
        //     }
        // ]
    },
    {
        path: 'reports/daily-report',
        component: DailyReportComponent
    }
];

@NgModule({
  imports: [
    RouterModule.forChild(
      reportRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class ReportRoutingModule {}