import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Auth} from "aws-amplify";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login = {
    phone: '',
    password: ''
  };
  error='';
  async doLogin(form){
    // console.log(this.login.phone)
    try {
        const user = await Auth.signIn(this.login.phone, this.login.password);
        console.log("good login");
        this.error='';
        this.router.navigateByUrl('tabs/tabs/tab1');
        
    } catch (err) {
        if (err.code === 'UserNotConfirmedException') {
            this.error='User not confirmed';
        } else if (err.code === 'PasswordResetRequiredException') {
            this.error='Forgot Password part';
        } else if (err.code === 'NotAuthorizedException') {
            this.error='Incorrect password';
        } else if (err.code === 'UserNotFoundException') {
            this.error='Incorrect phone number';
        } else {
            console.log(err);
        }
        console.log(this.error)
    }
  }
  constructor(private router: Router) { }

  ngOnInit() {
  }
}
