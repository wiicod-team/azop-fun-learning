import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private router:Router, private auth:AuthService) {}

  logout(){
    console.log("there logout");
    this.auth.currentAuthenticatedUser()
    .then(user => console.log(user))
    .catch(err => console.log(err));

    this.auth.signOut()
    .then(
      data => {
        console.log(data);
        this.router.navigateByUrl('/');
      })
    .catch(err => console.log(err));
  }
}
