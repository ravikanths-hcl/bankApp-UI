import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../_services/admin.service';
@Component({
  selector: 'app-create-account',
  templateUrl: './open-account.component.html',
  styleUrls: ['./open-account.component.css']
})

export class OpenAccountComponent implements OnInit {

  createAccountForm: FormGroup;
  accountCreated = 'Account Created Successfully!';
  users = [];
  branches = [];

  // isUserCreated = false;
  constructor(public adminSvc: AdminService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createAccountForm = this.formBuilder.group({
      type: ['', Validators.required],
      joint: ['', Validators.required],
      primaryOwner: ['', Validators.required],
      secondaryOwner: ['', Validators.required],
      branch: ['', Validators.required],
      initBalance: ['', Validators.required],
      currency: ['', Validators.required],
      cheques: ['', Validators.required]
  });

    this.adminSvc.getUsers((response) => {
      if ( response && !(response.length === 0) ) {
        this.users = response;
      }
    });

    this.adminSvc.getBranches((response) => {
      if ( response && !(response.length === 0) ) {
        this.branches = response;
      }
    });

  }
  onSubmit(data: FormGroup) {
    const cheqval = data.value.cheques;
    const chequesArr = [];
    if (cheqval){
      for (const val of cheqval.trim().split(',')){
        chequesArr.push({chqNumber: parseInt(val, 10)});
      }
    }

    const myaccount = {
      type : data.value.type,
      joint : data.value.joint,
      primaryowner : data.value.primaryOwner,
      secondaryowner : data.value.secondaryOwner,
      branch : data.value.branch,
      balance : data.value.initBalance,
      currency : data.value.currency,
      cheques : chequesArr
    };
    this.adminSvc.createAccount(myaccount, (response) => {
      if ( response && response.createdAt ) {
        this.adminSvc.isAccountCreated = true;
      }
      else{
        this.accountCreated = 'Error creating user !!!';
      }
      this.createAccountForm.reset();
    });
  }


}
