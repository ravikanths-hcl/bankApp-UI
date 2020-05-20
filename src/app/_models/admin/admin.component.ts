import { Component, OnInit } from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {AdminService} from '../_services/admin.service';
import {OpenAccountComponent} from './open-account/open-account.component';
import { from } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public adminService:AdminService) { }

  ngOnInit(): void {
  }

}
