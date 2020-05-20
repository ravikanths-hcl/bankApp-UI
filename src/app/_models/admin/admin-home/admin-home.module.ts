import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './admin-home.component';
//import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
//import { jqxButtonModule }   from 'jqwidgets-ng/jqxbuttons';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'




@NgModule({
  declarations: [AdminHomeComponent//,jqxButtonComponent
  ],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule
  ]
})
export class AdminHomeModule { }
