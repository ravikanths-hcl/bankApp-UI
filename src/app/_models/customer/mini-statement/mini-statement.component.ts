import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CustomerService } from "../../_services/customer.service";

@Component({
  selector: 'app-mini-statement',
  templateUrl: './mini-statement.component.html',
  styleUrls: ['./mini-statement.component.css']
})

export class MiniStatementComponent implements OnInit {

  subscription: Subscription;

  userTransaction = [];

  //  userTranscation = [
  //   {
  //     transactionId: 2653635,
  //     transactiontime: new Date(),
  //     transtype: 'atm',
  //     remarks: "save money",
  //     balance: 989754
  //   },
  //   {
  //     transactionId: 7363736,
  //     transactiontime: new Date(),
  //     transtype: 'card',
  //     remarks: "save money",
  //     balance: 149754
  //   },
  //   {
  //     transactionId: 4543,
  //     transactiontime: new Date(),
  //     transtype: 'atm',
  //     remarks: "save money",
  //     balance: 1469897
  //   },
  // ]

  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {

    this.subscription = this.customerService.setMiniStatementData
    .subscribe(
      (data) => {
       // this.setUserData = data;
        this.userTransaction = data;
      }
    );

  }

}
