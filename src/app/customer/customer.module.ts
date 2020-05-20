import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import {CustomerRoutingModule} from './customer.router.module'
import { CustomerComponent } from './customer.component';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { MiniStatementComponent } from './mini-statement/mini-statement.component';
import { DetailStatemntComponent } from './detail-statemnt/detail-statemnt.component';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import { UpdateDetailsComponent } from './update-details/update-details.component';
import { CustomerHeaderComponent } from './customer-header/customer-header.component';

@NgModule({
  declarations: [CustomerComponent,
    CustomerComponent,
    CustomerHomeComponent,
    MiniStatementComponent,
    DetailStatemntComponent,
    FundTransferComponent,
    UpdateDetailsComponent,
    CustomerHeaderComponent
  ],
  imports: [
    CommonModule,CustomerRoutingModule,RouterModule,FormsModule,ReactiveFormsModule
  ]
})
export class CustomerModule { }
