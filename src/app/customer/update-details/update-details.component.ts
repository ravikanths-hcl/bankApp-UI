import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription, from, VirtualTimeScheduler } from 'rxjs';
import { CustomerService } from '../../_services/customer.service';
import {AuthenticationService} from '../../_services/authentication.service';

@Component({
  selector: 'app-update-details',
  templateUrl: './update-details.component.html',
  styleUrls: ['./update-details.component.css']
})
export class UpdateDetailsComponent implements OnInit {
  subscription: Subscription;
  updatePersonalForm: FormGroup;
  updateMsg = 'Details Updated !';

  constructor(private formBuilder: FormBuilder, public custSvc: CustomerService, private authSvc: AuthenticationService) { }
  userid = '';
  ngOnInit(): void {
    this.updatePersonalForm = this.formBuilder.group({
      address: ['', Validators.required],
      city: ['', Validators.required],
      dob: ['', Validators.required],
      name: ['', Validators.required],
      phone: ['', Validators.required],
      pin: ['', Validators.required]
    });

    this.subscription = this.custSvc.setUserDetails
    .subscribe(
        (data) => {
          this.setUserDataToForm(data);
          this.userid = data.userid;
        }
      );
  }

  onSubmit(updateData: FormGroup){
    const userObj = {
      userDetails: {
        address: updateData.value.address,
        city: updateData.value.city,
        dob: new Date(updateData.value.dob),
        name: updateData.value.name,
        phone: updateData.value.phone,
        pin: updateData.value.pin
      }
    };
    this.custSvc.updatePersonalDetails(userObj, this.custSvc.userid, (response) => {
      if ( response && response.userid === this.custSvc.userid ) {
        this.custSvc.isPersonalUpdated = true;
      }
      else{
        this.updateMsg = 'Error Updating details!!!';
      }
      this.updatePersonalForm.reset();
    });

  }

  setUserDataToForm(user){
    const data = {
      address: user.userDetails.address,
      city: user.userDetails.city,
      dob: user.userDetails.dob,
      name: user.userDetails.name,
      phone: user.userDetails.phone,
      pin: user.userDetails.pin
      };

    this.updatePersonalForm.setValue(data);
  }
}
