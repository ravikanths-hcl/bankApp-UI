import { Component, OnInit, ViewChild } from '@angular/core';
//import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../../app.service';
import { Router, ActivatedRoute } from '@angular/router';
import {HeaderComponent} from '../header/header.component'

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  //@ViewChild('textImageButton', { static: false }) myTextImageButton: jqxButtonComponent;
  searchForm: FormGroup;
  searchId: string;
  constructor(private appService: AppService,
    private router: Router,) { }

  ngOnInit(): void {
  }

  thunderEffect() {
    console.log('');
  }
  onSubmit() {
    this.router.navigate(['/updateAccount',]);
    // /api/user/:userId
    this.appService.getUserDetails(this.searchId, function (res) {
      if(true){
        this.router.navigate(['/updateAccount',]);
      }
      console.log(res);
    })


    console.log('');
  }
}
