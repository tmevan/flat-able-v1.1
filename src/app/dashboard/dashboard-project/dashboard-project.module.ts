import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardProjectRoutingModule } from './dashboard-project-routing.module';
import { DashboardProjectComponent } from './dashboard-project.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardProjectRoutingModule,
    SharedModule
  ],
  declarations: [DashboardProjectComponent]
})
export class DashboardProjectModule { }
