import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AdminService {
  isUserCreated = false;
  isAccountCreated = false;
  isAccountUpdated = false;
  displaySearch = false;
  displayUser = false;
  displayAccount = false;

  whichClick = '';
  setAccountData = new Subject<any>();

  constructor(private client: HttpClient) {
  }

  public createUser(userData, callback) {
    this.client.post('https://edcl9.sse.codesandbox.io/api/user', userData)
      .subscribe((response) => {
        console.log(response);
        callback(response);
      });
  }

  public createAccount(accountData, callback) {
    this.client.post('https://edcl9.sse.codesandbox.io/api/account', accountData)
      .subscribe((response) => {
        console.log(response);
        callback(response);
      });
  }

  public getUsers(callback) {
    this.client.get('https://edcl9.sse.codesandbox.io/api/users')
      .subscribe((response) => {
        console.log(response);
        callback(response);
      });
  }

  public getBranches(callback) {
    this.client.get('https://edcl9.sse.codesandbox.io/api/branches')
      .subscribe((response) => {
        console.log(response);
        callback(response);
      });
  }

  // public getUserDetails(userId, callBackFunction){
  //   this.client.get(`https://edcl9.sse.codesandbox.io/api/user/${userId}`)
  //   .subscribe((response) => {
  //     console.log(response);
  //     this.setUserData.next(response[0]);
  //     callBackFunction(response);
  //   });
  // }

  public getAccountDetails(userId, callBackFunction){
    this.client.get(`https://edcl9.sse.codesandbox.io/api/account/${userId}`)
    .subscribe((response) => {
      console.log(response);
      this.setAccountData.next(response);
      callBackFunction(response);
    });
  }

  public updateAccountNewTransaction(accountTrans, callback) {
    this.client.post('https://edcl9.sse.codesandbox.io/api/account/newtransaction', accountTrans)
      .subscribe((response) => {
        console.log(response);
        callback(response);
      });
  }

}
