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
        data => console.log(data),
        data => this.router.navigateByUrl('/login')
      )
      .catch(err => console.log(err));
  
  }
  resend(){
    // console.log("ca marche");
    Auth.resendSignUp(this.code.username).then(() => {
        console.log('code resent successfully');
    }).catch(e => {
        console.log(e);
    });
  }
  constructor(private router:Router) { }

  ngOnInit() {
  }

}
