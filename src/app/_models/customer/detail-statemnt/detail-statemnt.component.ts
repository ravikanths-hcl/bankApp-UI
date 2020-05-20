import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../../_services/customer.service';

import * as XLSX from 'xlsx';

@Component({
  selector: 'app-detail-statemnt',
  templateUrl: './detail-statemnt.component.html',
  styleUrls: ['./detail-statemnt.component.css']
})
export class DetailStatemntComponent implements OnInit {
  detailSatementForm: FormGroup;
  showTable = false;
  fileName = 'statement.xlsx';
  userTransaction = [];

  constructor(private formBuilder: FormBuilder, public customerSvc: CustomerService) { }

  ngOnInit(): void {
    this.detailSatementForm = this.formBuilder.group({
      criteria: ['', Validators.required],
      startDate: [],
      endDate: [],
      amount: [],
      lessthan: [],
      cheque: []
    });

  }
  onSubmit(data: FormGroup) {
      let searchQry = {};
      switch (data.value.criteria)
      {
        case 'DATE-RANGE':  searchQry = {
                                          accountId: this.customerSvc.accountId,
                                          criteria: 'DATE-RANGE',
                                          fromDate: data.value.startDate,
                                          toDate: data.value.endDate
                                        };
                            break;
        case 'MONTHLY':   searchQry = {accountId: this.customerSvc.accountId, criteria: 'MONTHLY'};
                          break;
        case 'ANNUALLY':  searchQry = {accountId: this.customerSvc.accountId, criteria: 'ANNUALLY'};
                          break;
        case 'AMOUNT':  searchQry = {
                                      accountId: this.customerSvc.accountId,
                                      criteria: 'AMOUNT',
                                      lessThan: (data.value.lessthan === 'LESSTHAN'),
                                      amount: data.value.amount
                                    };
                        break;
        case 'CHEQUE':  searchQry = {accountId: this.customerSvc.accountId, criteria: 'CHEQUE', chequeNumber: Number(data.value.cheque)};
                        break;
      }

      this.customerSvc.getDetailedStatement(searchQry, (response) => {
        if ( response && response.length !== 0 ) {
          this.userTransaction = response;
        }
        this.detailSatementForm.reset();
      });
      this.showTable = true;
  }

  exportStatemntToexcel() {

    const element = document.getElementById('detail-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    XLSX.writeFile(wb, this.fileName);

  }

}
