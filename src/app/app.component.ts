/** App component checks weather user is logged in or not and if not user is directed to login page */
import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

constructor(private loginService: LoginService, private router: Router) { }  

ngOnInit() {
  /** If not logged in, navigate to login page */
  let loggedIn = this.loginService.checkValid();  
  if(loggedIn === false){
    this.router.navigate(['login']);    
  }
}

}
