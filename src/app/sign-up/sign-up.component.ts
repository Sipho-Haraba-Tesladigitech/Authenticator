import { Router } from '@angular/router';
import { CognitoAPIService } from './../cognito-api.service';
import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { User } from '../user.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {  
  isConfirm = false
  
  fname = new FormControl('', [Validators.required]);
  lname = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.pattern('.')]);
  code = new FormControl('', [Validators.required]);
  constructor(private router:Router, private cognito:CognitoAPIService,private app:AppComponent) { }

  ngOnInit(): void {
  }
  signUp():void{
    this.app.user = new User(this.fname.value,this.lname.value,this.email.value,this.password.value)
    //console.log(this.app.user)
    this.cognito.signUp(this.app.user).then(()=>{
      alert('Account created successfully')
      this.isConfirm = true
    }).
    catch((error)=>{alert(error.message)})
  }
  verifyUser():void{
    this.app.user.code = this.code.value  
    this.cognito.varifyEmail(this.app.user).then(()=>{
        alert('Account verified successfully')
        this.router.navigateByUrl('/sign-in')
      }).
      catch((error)=>{alert(error.message)})
  }
  

}
