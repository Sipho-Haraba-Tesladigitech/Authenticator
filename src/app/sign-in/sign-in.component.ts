import { User } from './../user.model';
import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { CognitoAPIService } from '../cognito-api.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  isforgotPassword = false
  isResetPassword = false
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.pattern('.')]);
  code = new FormControl('', [Validators.required]);
  constructor(private router:Router, private cognito:CognitoAPIService,private app:AppComponent) { }

  ngOnInit(): void {
  }
  createAccount():void{
    this.router.navigateByUrl('/sign-up')
  }
  signIn():void{
    this.cognito.signIn(this.email.value as string,this.password.value as string).then(()=>{
      alert('Successfully logged in')
      User.isSignedIn = true      
      this.router.navigateByUrl('')
    }).
    catch((error)=>{alert(error.message)})
  }
  forgotPassword():void{
    this.cognito.recoverAccount(this.email.value as string).then(()=>{
      alert('A code for account recovery has been sent to your email.')
      this.isResetPassword = true
      this.isforgotPassword = false
    }).
    catch((error)=>{alert(error.message)})
  }
  setNewPassword():void{
    this.cognito.submitNewPassword(this.email.value as string, this.code.value as string, this.password.value as string).
    then(()=>{
      alert('New password has been set successfully')
      this.isResetPassword = false
      //this.router.navigateByUrl('/sign-in')
    }).
    catch((error)=>{alert(error.message)})
  }

}
