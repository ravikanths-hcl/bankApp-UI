import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AdminService } from '../../_services/admin.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from '../../app.service';
import {  AuthenticationService } from '../../_services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  isAuthenticated = false;
  private userSub: Subscription;
  constructor(
    public adminService: AdminService,
    private appService: AppService,
    private authService: AuthenticationService,

  ) { }

  ngOnInit() {

  }

  onCreateUserClick() {
    this.adminService.whichClick = 'createUser';
    this.adminService.isUserCreated = false;

    this.adminService.displaySearch = false;
    this.adminService.displayUser = true;
    this.adminService.displayAccount = false;
  }

  onCreateAccountClick() {
    this.adminService.whichClick = 'createAccount';
    this.adminService.isAccountCreated = false;

    this.adminService.displaySearch = false;
    this.adminService.displayUser = false;
    this.adminService.displayAccount = true;
  }

  onUpdateAccountClick() {
    this.adminService.whichClick = 'updateAccount';
    this.adminService.isAccountUpdated = false;

    this.adminService.displaySearch = true;
    this.adminService.displayUser = false;
    this.adminService.displayAccount = false;
  }

  onLogoutClick() {
    this.adminService.whichClick = 'logout';
    this.authService.isUserLoggedIn = false;

    this.adminService.displaySearch = false;
    this.adminService.displayUser = false;
    this.adminService.displayAccount = false;
  }


}
