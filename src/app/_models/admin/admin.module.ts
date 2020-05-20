import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
//import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
//import { jqxButtonModule }   from 'jqwidgets-ng/jqxbuttons';
import { OpenAccountComponent } from './open-account/open-account.component'
import { UpdateAccountComponent } from './update-account/update-account.component'
import { HeaderComponent } from './header/header.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import {AdminRoutingModule} from './admin-routing.module';
import { CreateUserComponent } from './create-user/create-user.component'


@NgModule({
  declarations: [AdminComponent,
     OpenAccountComponent,
    UpdateAccountComponent, HeaderComponent,AdminHomeComponent, CreateUserComponent
  ]
  ,
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,AdminRoutingModule,RouterModule
  ]
})
export class AdminModule { }
