import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private router:Router) {}

  logout(){
    console.log("there");
    Auth.currentAuthenticatedUser({
      bypassCache: false  
      // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    }).then(user => console.log(user))
    .catch(err => console.log(err));

    Auth.signOut({ global: true })
    .then(
      data => console.log(data),
      data => this.router.navigateByUrl('/')
      )
    .catch(err => console.log(err));
  }
}
