import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticatorGuard } from './authenticator.guard';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    canActivate:[AuthenticatorGuard]
  },
  {
    path:'sign-up',
    component:SignUpComponent
  },
  {
    path:'sign-in',
    component:SignInComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
