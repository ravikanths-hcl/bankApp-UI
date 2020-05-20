import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../_services/customer.service';
import { User } from '../../_models';
import {AuthenticationService} from '../../_services/authentication.service';
import { from } from 'rxjs';
import { FundTransferComponent } from '../fund-transfer/fund-transfer.component';

@Component({
  selector: 'app-customer-header',
  templateUrl: './customer-header.component.html',
  styleUrls: ['./customer-header.component.css']
})
export class CustomerHeaderComponent implements OnInit {

  constructor(public customerService: CustomerService, private authService: AuthenticationService ) { }

  ngOnInit(): void {
  }

  onHomeClick() {
    this.customerService.customerWhichClick = 'home';
    this.customerService.getUserDetails(this.customerService.accountId, (res) => {
      if (res){
          this.customerService.customerWhichClick = 'home';
        }
    });
    }

  onFundTransferClick() {
    this.customerService.customerWhichClick = 'fundTransfer';
    this.customerService.isTransferred = false;
  }

  onMiniStatementClick() {
    this.customerService.customerWhichClick = 'miniStatement';
    this.customerService.getMiniStatement((res) => {
    if (res){
      this.customerService.customerWhichClick = 'miniStatement';
    }
    });
  }

  onDetailStatementClick() {
    this.customerService.customerWhichClick = 'detailStatment';
  }

  onUpdateDetailsClick(){
    this.customerService.customerWhichClick = 'UpdateDetail';
    this.customerService.isPersonalUpdated = false;
    this.customerService.getUserDetails(this.authService.userName, (res) => {
      if (res){
        this.customerService.customerWhichClick = 'UpdateDetail';
      }
          });
  }

  onLogoutClick() {
    this.customerService.customerWhichClick = 'logout';
    this.authService.isUserLoggedIn = false;
  }

}
