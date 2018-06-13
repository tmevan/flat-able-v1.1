import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RadialComponent} from './radial.component';

const routes: Routes = [
  {
    path: '',
    component: RadialComponent,
    data: {
      breadcrumb: 'Radial Chart',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RadialRoutingModule { }
