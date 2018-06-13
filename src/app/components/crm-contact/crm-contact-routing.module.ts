import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CrmContactComponent} from './crm-contact.component';

const routes: Routes = [
  {
    path: '',
    component: CrmContactComponent,
    data: {
      breadcrumb: 'CRM Contact'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrmContactRoutingModule { }
