import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Form Components',
      status: false
    },
    children: [
      {
        path: 'basic-elements',
        loadChildren: './basic-elements/basic-elements.module#BasicElementsModule'
      }, {
        path: 'add-on',
        loadChildren: './add-on/add-on.module#AddOnModule'
      }, {
        path: 'advance-elements',
        loadChildren: './advance-elements/advance-elements.module#AdvanceElementsModule'
      }, {
        path: 'form-validation',
        loadChildren: './form-validation/form-validation.module#FormValidationModule'
      }, {
        path: 'picker',
        loadChildren: './picker/picker.module#PickerModule'
      }, {
        path: 'select',
        loadChildren: './form-select/form-select.module#FormSelectModule'
      }, {
        path: 'masking',
        loadChildren: './masking/masking.module#MaskingModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
