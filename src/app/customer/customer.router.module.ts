import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { CustomerComponent } from './customer.component'

const routes: Routes = [
    {
        path: '', component: CustomerComponent,
        // children: [
        //   { path: 'createUser', component: OpenAccountComponent },
        //   { path: 'updateAccount', component: UpdateAccountComponent }
        // ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CustomerRoutingModule { }
