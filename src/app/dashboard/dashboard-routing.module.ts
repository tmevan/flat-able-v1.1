import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    data: {
      breadcrumb: 'Dashboard',
      icon: 'icofont-home bg-c-blue',
      status: false
    },
    children: [
      {
        path: 'dashboard-default',
        loadChildren: './dashboard-default/dashboard-default.module#DashboardDefaultModule'
      },
      {
        path: 'dashboard-ecommerce',
        loadChildren: './dashboard-ecommerce/dashboard-ecommerce.module#DashboardEcommerceModule'
      },
      {
        path: 'dashboard-crm',
        loadChildren: './dashboard-crm/dashboard-crm.module#DashboardCrmModule'
      },
      {
        path: 'dashboard-analytics',
        loadChildren: './dashboard-analytics/dashboard-analytics.module#DashboardAnalyticsModule'
      },
      {
        path: 'dashboard-project',
        loadChildren: './dashboard-project/dashboard-project.module#DashboardProjectModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
