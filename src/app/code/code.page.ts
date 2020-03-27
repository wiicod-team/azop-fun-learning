import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Auth} from "aws-amplify";

@Component({
  selector: 'app-code',
  templateUrl: './code.page.html',
  styleUrls: ['./code.page.scss'],
})
export class CodePage implements OnInit {

  code={
    "username":'',
    "code":''
  }
  error='';
  verificationCode(form){
    console.log(form.value)
    // After retrieving the confirmation code from the user
    Auth.confirmSignUp(
      this.code.username,
      this.code.code, 
    {
      // Optional. Force user confirmation irrespective of existing alias. By default set to True.
        forceAliasCreation: true    
    }).then(
        data => {
          console.log(data);
          this.error='';
          this.router.navigateByUrl('/login');
        }
      )
      .catch(err => {
        console.log(err);
        if(err.code == "UserNotFoundException"){
          this.error="Invalid Phone number";
        }else{
          this.error=err.message;
        }
      });
  
  }
  resend(){
    // console.log("ca marche");
    Auth.resendSignUp(this.code.username).then(() => {
        console.log('code resent successfully');
        this.error='code resent successfully';
    }).catch(e => {
        console.log(e);
        this.error=e.message;
    });
  }
  constructor(private router:Router) { }

  ngOnInit() {
  }

}
