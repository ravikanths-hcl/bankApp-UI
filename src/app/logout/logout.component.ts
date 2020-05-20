import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../_services/authentication.service";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
 // isLogoutClicked = false;
  constructor(private authService:AuthenticationService) { }

  ngOnInit(): void {
  }

  onLogOutClick() {
    this.authService.isUserLoggedIn = false;
    this.authService.userName = '';
    this.authService.name = '';
  }

}
