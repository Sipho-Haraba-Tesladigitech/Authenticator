import { HomeComponent } from './home/home.component';
import { User } from './user.model';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ZenObservable } from 'zen-observable-ts';
import { APIService, Tasks, OnCreateTasksSubscription } from './API.service';
import { MatTable, MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Authenticator';
  user!: User
  isSignedIn = false;

}
//pool ID:us-east-1_DuEdzmb8k
//client ID:6m0jooonjhdpin1ifji4jcc1q
//GraphQL endpoint: https://tzc3d5czknferohyq3x4mkzv5a.appsync-api.us-east-1.amazonaws.com/graphql
//GraphQL API KEY: da2-hqoav672jfcxvffcdby5nynvya