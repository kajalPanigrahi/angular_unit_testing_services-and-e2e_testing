import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { RouteService } from '../services/route.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username  = new FormControl('',Validators.required)
  password = new FormControl('',[Validators.required,Validators.minLength(6)])

  loginError : string = '';

  constructor(private authService : AuthenticationService, private routeService : RouteService) { }

  ngOnInit() {
  }

  signIn(){
    let user = {
      username:this.username.value,
      password:this.password.value,
    }

    console.log(user);

    this.authService.validateUser(user).subscribe(
      data=>{
        console.log(data);
        this.authService.setAuthToken(data["token"]);
        this.routeService.toDashboard();
      },
      error=>{
        console.log(error)
        this.loginError = error.message;
      }
    )


  }
}
