import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import {LoginServiceService} from '../login-service.service';
import {set} from '../utils/local-store';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  form= new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(6)])
  })

  email:string ;
  password:string;
  username:string;


  constructor(private router: Router, private  _LoginServiceService: LoginServiceService) { 
    //this.email='' ;
    this.password='' ;
    this.username='' ;
  }

  ngOnInit(): void {
  }


  loginUser() {
    console.log("recieved");
     this._LoginServiceService.login().subscribe(response => {
        console.log(response);
        set('USER_ID', this.username);
        set('USER_TOKEN', response.request_token);
        set('AUTHENTICATED', response.success);
        this.router.navigateByUrl('/home');
      },
      error => {
        console.log(error);
      });
  }
}
