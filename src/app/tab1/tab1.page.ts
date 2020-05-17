import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {DataStore} from "@aws-amplify/datastore";
import {Suggestion, User} from "../../models";
import {Auth} from 'aws-amplify';
import * as uuid from 'uuid';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  suggestionForm:FormGroup;
  validation_messages={
    title:[
      {
        type:"required",
        message:"Title is required"
      }
    ],
    description:[
      {
        type:"required",
        message:"Description is required"
      }
    ],
    status:[
      {
        type:"required",
        message:"Status is required"
      }
    ],
    suggestionscol:[
      {
        type:"required",
        message:"Suggestion Col is required"
      }
    ]
  }
  user='';
  phone = '';
  username='';
  myid = uuid.v4();
  constructor(private router:Router, private auth:AuthService) {
    this.suggestionForm= new FormGroup({
      title: new FormControl("",Validators.compose([Validators.required])),
      description: new FormControl("",Validators.compose([Validators.required])),
      status: new FormControl("",Validators.compose([Validators.required])),
      suggestionscol: new FormControl("",Validators.compose([Validators.required]))
      })

      Auth.currentAuthenticatedUser({
        bypassCache: false  
      }).then(
        (user)=>{
          console.log(user);
          this.user=user;
          this.phone=user.attributes["phone_number"];
          this.username=user.username;
        })
      .catch(err => console.log(err));
      this.list();
  }
  
  async createSuggestion(){
    const suggestion=this.suggestionForm.getRawValue();

    const Users = await DataStore.query<User>(User, c =>c.firstName("eq", this.username));

    await DataStore.save(
      User.copyOf(Users[0], updated => {
        updated.suggestions=[
          {
            id : this.myid,
            title : suggestion.title,
            description : suggestion.description,
            status : suggestion.status
          }
        ]
      })
    );
    this.router.navigateByUrl('/tabs/tabs/tab2')
  }

  async list(){
    const utilisateur = await DataStore.query<User>(User);
    console.log(utilisateur);
  }
}
