import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Auth} from "aws-amplify";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  register={
    username:'',
    email:'',
    phone:'',
    password:''
  }
  error='';
  doRegister(form){
    console.log(form.value)
    Auth.signUp({
      "username":this.register.phone,
      "password":this.register.password,
      attributes: {
          "email":this.register.email,          // optional
          "phone_number":this.register.phone,   // optional - E.164 number convention
          // other custom attributes 
      },
      validationData: []  //optional
      })
      .then(
        data => {
          console.log(data);
          this.error='';
          this.router.navigateByUrl('/code');
        }
      )
      .catch(err => {
        console.log(err);
        this.error=err.message;
      });
  }
  constructor(private router:Router) { }

  ngOnInit() {
  }

}
