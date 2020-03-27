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
            // The error happens if the user didn't finish the confirmation step when signing up
            // In this case you need to resend the code and confirm the user
            // About how to resend the code and confirm the user, please check the signUp part
            // alert("User not confirmed");
            this.error='User not confirmed';
        } else if (err.code === 'PasswordResetRequiredException') {
            // The error happens when the password is reset in the Cognito console
            // In this case you need to call forgotPassword to reset the password
            // Please check the Forgot Password part.
            // alert("Forgot Password part");
            this.error='Forgot Password part';
        } else if (err.code === 'NotAuthorizedException') {
            // The error happens when the incorrect password is provided
            // alert("incorrect password");
            this.error='incorrect password';
        } else if (err.code === 'UserNotFoundException') {
            // The error happens when the supplied username/email does not exist in the Cognito user pool
            // alert("username/email does not exist in the Cognito user pool");
            this.error='username/email does not exist in the Cognito user pool';
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
