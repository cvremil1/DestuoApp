import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule,ReactiveFormsModule, Validators } from '@angular/forms';
import { FormGroup,FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.page.html',
  styleUrls: ['./user-registration.page.scss'],
  standalone: true,
  imports: [IonicModule,FormsModule,ReactiveFormsModule,CommonModule]
})
export class UserRegistrationPage implements OnInit {
  registration = new FormGroup({
    firstName : new FormControl('',Validators.required),
    lastName:new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
    confirmPassword: new FormControl('', Validators.required),
    currentAddress: new FormControl(''),
    permanentAddress: new FormControl(''),
    sameAsCurrentAddress: new FormControl(false),
    termsAccepted:  new FormControl([false, Validators.requiredTrue]),
    phoneNumber: new FormControl('',Validators.required),
    username: new FormControl('',Validators.required),
    state: new FormControl('',Validators.required),
    city: new FormControl('',Validators.required),
    country: new FormControl('',Validators.required),
    zipCode: new FormControl('',Validators.required),
  })



  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string= '';
  confirmPassword: string= '';
  currentAddress: string= '';
  permanentAddress: string= '';
  sameAsCurrentAddress: boolean = false;
  termsAccepted: boolean = false;
  phoneNumber:string= '';
  username:string= '';
  
  user = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    currentAddress: '',
    permanentAddress: '',
    zipCode: '',
    city: '',
    country: '',
    state: '',
    username:''
  };
  onSubmit() {
   
    console.log("Submitting registration data:",  this.user);
  }
  cancel(){
  
  }
  constructor() { }

  ngOnInit() {
  }

}
