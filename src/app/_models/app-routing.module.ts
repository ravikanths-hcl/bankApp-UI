import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const appRoutes: Routes = [
  {
    path: "admin",
    loadChildren: () =>
      import("./admin/admin.module").then(m => m.AdminModule)
  },
  {
    path: "customer",
    loadChildren: () =>
      import("./customer/customer.module").then(
        m => m.CustomerModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
