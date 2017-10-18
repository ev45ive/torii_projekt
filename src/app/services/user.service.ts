import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of'

@Injectable()
export class UserService {

  user = {
    name: 'Norbert', email:'norbert@doradca'
  }
  
  isLoggedIn$

  logIn(user){
    // TODO:
    // return this.http.post('/login',user).subscribe( resp => {    })
    this.user = {
      name: user.login,
      email: user.login
    }
  }
  
  getUser(){
    return Observable.of(this.user)
  }

  constructor() { }

}
