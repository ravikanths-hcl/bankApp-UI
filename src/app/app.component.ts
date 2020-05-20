import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { AlertService, AuthenticationService } from './_services';
import { AppService } from "./app.service";
import {LogoutComponent} from './logout/logout.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLogin: boolean = false;

  constructor(
    public authenticationService: AuthenticationService,
    private alertService: AlertService,
    public appService: AppService) { }
}
