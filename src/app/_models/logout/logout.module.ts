import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LogoutRoutingModule } from './logout-routing.module';
import { LogoutComponent } from './logout.component';


@NgModule({
  declarations: [LogoutComponent],
  imports: [
    CommonModule,
    LogoutRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LogoutModule { }
