import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../../_services/customer.service';
import {AuthenticationService} from '../../_services/authentication.service';


@Component({
  selector: 'app-fund-transfer',
  templateUrl: './fund-transfer.component.html',
  styleUrls: ['./fund-transfer.component.css']
})
export class FundTransferComponent implements OnInit {

  fundTransferForm: FormGroup;
  accounts = [];
  myAccount = {accountid: ''};
  transferMsg = 'Funds Transferred!';

  constructor(public customerService: CustomerService, private authService: AuthenticationService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.fundTransferForm = this.formBuilder.group({
      fromAccount: ['', Validators.required],
      toAccount: ['', Validators.required],
      amount: ['', Validators.required]
    });

    this.customerService.getAccounts((response) => {
      if ( response && !(response.length === 0) ) {
        this.accounts = response;
      }
    });

    this.customerService.getAccountDetails(this.authService.userId, (res) => {
      if (res && res.accountid){
        this.myAccount.accountid = res.accountid;
        this.fundTransferForm.controls['fromAccount'].setValue(this.myAccount.accountid);
      }
    });

  }

  onSubmit(fundtransferData: FormGroup) {

    const transfer = {
      fromAcct: fundtransferData.value.fromAccount,
      toAcc: fundtransferData.value.toAccount,
      transAmount: fundtransferData.value.amount
    };
    this.customerService.fundTransfer(transfer, (response) => {
      if ( response && response.message === 'Funds Transferred!' ) {
        this.customerService.isTransferred = true;
      }
      else{
        this.transferMsg = 'Error Transferring!!!';
      }
      this.fundTransferForm.reset();
    });
  }

}
