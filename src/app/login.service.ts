import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class LoginService {

  private loggedIn: boolean;
  constructor() {
    this.loggedIn = false;
  }

  validate(credentials): Observable<any>{
    if( credentials.username === 'user' && credentials.password === 'password'){
      this.loggedIn = true;
      return of('success');
    } else {
      throw('invalid credentials');
    }
  } 

  checkValid(): boolean{
    return this.loggedIn;
  }

}
