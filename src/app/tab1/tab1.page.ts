import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import {DataStore} from "@aws-amplify/datastore";
// import {Suggestion} from "../../models";

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
  constructor(private router:Router, private auth:AuthService) {
    this.suggestionForm= new FormGroup({
      title: new FormControl("",Validators.compose([Validators.required])),
      description: new FormControl("",Validators.compose([Validators.required])),
      status: new FormControl("",Validators.compose([Validators.required])),
      suggestionscol: new FormControl("",Validators.compose([Validators.required]))
      })
  }
  
  async createSuggestion(){
    console.log(this.suggestionForm.getRawValue());
    // await DataStore.save(
    //   new Suggestion(this.suggestionForm.getRawValue())
    // )
    this.router.navigateByUrl('/tabs/tabs/tab2')
  }
}
