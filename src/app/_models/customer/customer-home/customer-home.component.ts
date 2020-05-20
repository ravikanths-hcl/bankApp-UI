import { Component, OnInit } from '@angular/core';
import { Subscription, from } from 'rxjs';
import { CustomerService } from "../../_services/customer.service";
import {AuthenticationService} from "../../_services/authentication.service";

@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.css']
})
export class CustomerHomeComponent implements OnInit {

  subscription: Subscription;

 // userData = [];

  userDetails:any;

  constructor(public customerService: CustomerService, private authService: AuthenticationService) { }

  ngOnInit(): void {

    this.customerService.getUserDetails(this.authService.userName, (res) => {
      if (res){
          this.customerService.getAccountDetails(res["userid"], (response) => {
            this.userDetails = response;
          });
          this.userDetails = res;
          this.customerService.customerWhichClick = 'home';
        }
      });

  }

}
