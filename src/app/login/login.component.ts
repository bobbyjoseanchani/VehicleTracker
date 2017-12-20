import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormsModule } from '@angular/forms';

import { LoginService } from '../login.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	loginForm = new FormGroup ({
		username: new FormControl('', [Validators.required]),
		password: new FormControl('', [Validators.required])
	});  
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  login(): void{
    this.loginService.validate(this.loginForm.value).subscribe(
      success=> {
        /** If successfully validated, show vehicles  */
        this.router.navigate(['vehicles']);
      },
      error=> {
        console.log('failed login');        
      } 
    );
  }

}
