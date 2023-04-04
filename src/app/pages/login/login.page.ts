import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,ReactiveFormsModule]
})
export class LoginPage implements OnInit {

  loginForm!:FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit() {

    this.loginForm =this.fb.group({
      email: ['',Validators.required],
      password: ['',Validators.required]
    })

  }

}
