import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../_services/admin.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  createUserForm: FormGroup;
  userCreated = 'Customer Created Successfully!';
  // isUserCreated = false;

  constructor(public adminSvc: AdminService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createUserForm = this.formBuilder.group({
      address: ['', Validators.required],
      city: ['', Validators.required],
      dob: ['', Validators.required],
      name: ['', Validators.required],
      phone: ['', Validators.required],
      pin: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
  });

  }

  onSubmit(data: FormGroup) {
    const myuser = {
    username: data.value.username,
    password: data.value.password,
    role: 'Customer',
    userDetails: {
        name: data.value.name,
        dob: data.value.dob,
        address: data.value.address,
        city: data.value.city,
        pin: parseInt(data.value.pin, 10),
        phone: parseInt(data.value.phone, 10)
    }
  };


    this.adminSvc.createUser(myuser, (response) => {
      if ( response && response.createdAt ) {
        this.adminSvc.isUserCreated = true;
        // this.adminSvc.whichClick = 'openAccount';
      }
      else{
        this.userCreated = 'Error creating user !!!';
      }
      this.createUserForm.reset();
    });

  }

}
