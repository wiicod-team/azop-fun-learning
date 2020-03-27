import { Component, OnInit } from '@angular/core';
import {Auth} from 'aws-amplify';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {

  constructor() { 
    this.isAuthenticated();
  }
  isAuthenticated(){
    Auth.currentAuthenticatedUser({
      bypassCache: false  
      // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    }).then(user => console.log(user))
    .catch(err => console.log(err));
  }
  ngOnInit() {
    
  }

}
