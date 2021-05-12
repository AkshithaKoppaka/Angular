import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { LoginService} from '../../login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(public service: LoginService, public router: Router) { 
    
  }

  ngOnInit(): void {
    
  }
  loginForm = new FormGroup({
    username : new FormControl(),
    password: new FormControl()
  })
  CheckUser(){
    alert();
    var res=this.service.ValidateUser(this.loginForm.value["username"], this.loginForm.value["password"]);
    if(res){
      this.router.navigate(["home"]);
    }
    else{
      alert("Invalid User");
    }
  }

}

 
