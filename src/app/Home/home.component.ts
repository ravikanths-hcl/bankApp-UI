import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../_models';
import { UserService } from '../_services';
import { NgForm } from '@angular/forms';

@Component({ templateUrl: 'home.component.html' })
export class Home implements OnInit {
  


    constructor(private userService: UserService) {
    
    }

    ngOnInit() {
     
    }

  


}