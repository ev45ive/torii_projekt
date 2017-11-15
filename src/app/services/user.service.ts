import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of'
import 'rxjs/add/operator/map'
import { HttpClient } from "@angular/common/http";
import {BehaviorSubject} from 'rxjs/BehaviorSubject'
import { Router } from "@angular/router";

@Injectable()
export class UserService {

  user = new BehaviorSubject({})

  constructor(private http:HttpClient,  
  private router:Router) { 
    //this.router.navigate(['/login'])
  }

  logIn(user){
    return this.http.get<any>(
      `http://localhost:3000/users?email=${user.name}&password=${user.password}`
    )
    .map( users => { 
        let user = users[0]
        this.user.next({
          id: user.id,
          name: user.name,
          email: user.email
        })
        return this.user.getValue()
    })
  }
  
  getUser(){
    return this.user
  }


}
