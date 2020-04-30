import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted = false;

  constructor(private authservice : AuthService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: [ '', Validators.required]
    });
  }

  get formControls () {return this.loginForm.controls; }
  
  login(){
    this.isSubmitted = true;
    if(this.loginForm.invalid){
      return;
    }
    this.authservice.login();
    this.router.navigateByUrl('/admin');
  }


}
