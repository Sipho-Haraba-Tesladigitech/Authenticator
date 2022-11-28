import { User } from './user.model';
import { Injectable } from '@angular/core';
import { Amplify, Auth } from 'aws-amplify';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
//This is an API that we use to authenticate users.
export class CognitoAPIService {
  
  constructor() { 
    //this line initializes aws-cognito with the userPoolId and userWebClientId
    //this is where we aws-cognito accepts to provide us with its Authentication services.
    Amplify.configure({Auth: environment.cognito})
  }
  //this method will get user's details and send a code to the provided email.
  public signUp(user:User):Promise<any>{
    return Auth.signUp({
      username:user.email as string,
      password:user.password as string,
      attributes:{
        email:user.email,
        given_name:user.fname,
        family_name:user.lname
      }
    })
  }
  //this method will verify that the code sent to the provided email is valid
  public varifyEmail(user:User):Promise<any>{
    return Auth.confirmSignUp(user.email as string,user.code as string)
  }
  //this method will log the user in
  signIn(email:string,password:string):Promise<any> {
    return Auth.signIn(email,password)
  }
  //this method will return the user details if the user hass been successfully logged in.
  getUserDetails():Promise<any>{
    return Auth.currentUserInfo();
  }
  //this method will log the user out
  signOut():Promise<any>{
    return Auth.signOut();
  }
  //this method will send a code to the provided email to recover an account
  recoverAccount(email:string):Promise<any>{
    return Auth.forgotPassword(email)
  }
  //this method will submit a new password to Cognito
  submitNewPassword(email:string, code:string, newPassword:string):Promise<any>{
    return Auth.forgotPasswordSubmit(email, code, newPassword)
  }
}
