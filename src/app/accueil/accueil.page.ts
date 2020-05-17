import { Component, OnInit } from '@angular/core';
import {Auth} from 'aws-amplify';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {

  constructor(private router:Router) { 
    this.isAuthenticated();
  }
  isAuthenticated(){
    Auth.currentAuthenticatedUser({
      bypassCache: false  
      // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    }).then((user) => {
      if(user.username!=''){
        this.router.navigateByUrl('/tabs/tabs/tab1');
      }
    })
    .catch(err => console.log(err));
  }
  ngOnInit() {
    
  }

}
