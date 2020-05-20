import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import {AdminService} from '../../_services/admin.service';

@Component({
  selector: 'app-update-account',
  templateUrl: './update-account.component.html',
  styleUrls: ['./update-account.component.css']
})
export class UpdateAccountComponent implements OnInit {

  updateAccountForm: FormGroup;
  subscription: Subscription;
  searchId: string;
  accountUpdated = 'Account Updated !';
  isAccountUpdate = false;
  displayForm = false;
  accountBalance: number;
  accountId: number;

  constructor( public adminService: AdminService, private formBuilder: FormBuilder ) { }


  ngOnInit(): void {
    this.updateAccountForm = this.formBuilder.group({
      accountId: ['', Validators.required],
      transAmt: ['', Validators.required],
      transtype: ['', Validators.required],
      remarks: ['', Validators.required],
      chequeNumber: ['']
  });

  }

  onSubmit(data: FormGroup) {

    const accountUpdate = {
      accountId: data.value.accountId,
      status: 'Success',
      remarks: data.value.remarks,
      transAmt: parseFloat(data.value.transAmt),
      credit: data.value.transtype === 'DEPOSIT' ? true : false,
      chequeNumber: data.value.chequeNumber ? data.value.chequeNumber : '',
      transtype: data.value.transtype
    };
    this.adminService.updateAccountNewTransaction(accountUpdate, (response) => {
      if ( response && response.message === 'Account Updated !' ) {
        this.adminService.isAccountUpdated = true;
      }
      else{
        this.accountUpdated = 'Error creating user !!!';
      }
      this.updateAccountForm.reset();
      this.searchId = '';
    });
  }

  setAccountDataToForm(data){
    this.accountBalance = data.balance;
    this.accountId = data.accountid;
    this.displayForm = true;

    this.updateAccountForm.controls['accountId'].setValue(data.accountid);
  }

  onSearchClick() {
    this.adminService.whichClick = 'updateAccount';
    this.adminService.getAccountDetails( this.searchId, (res) => {
      if (res){
        // this.adminService.whichClick = 'updateAccount';
        this.setAccountDataToForm(res);
      }
      console.log(res);
    });

  }


}
