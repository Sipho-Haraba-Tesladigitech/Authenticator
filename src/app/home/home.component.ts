import { DialogComponent } from './../dialog/dialog.component';
import { APIService, Tasks, OnCreateTasksSubscription, CreateTasksInput } from './../API.service';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CognitoAPIService } from '../cognito-api.service';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ZenObservable } from 'zen-observable-ts';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  data: Array<Tasks> = []
  taskObj: Tasks[] = []
  isDataLoaded = false
  canAddTasks = false;
  subscription: ZenObservable.Subscription | null = null;

  //Define the table columns
  displayedColumns: string[] = ['topic', 'title', 'status', 'completionDate'];
  //Add emplty data to the table rows
  dataSource = new MatTableDataSource<Tasks>(ELEMENT_DATA);
  constructor(private router: Router, private cognito: CognitoAPIService, private api: APIService, private dialog: MatDialog,
    private app:AppComponent) { }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatTable) myTable!: MatTable<any>;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  

  ngOnInit(): void {
    this.api.ListTasks().then((list) => {
      this.data = list.items as Tasks[]//Get the list of data

      ELEMENT_DATA = this.data //Add data to the table rows
      this.dataSource = new MatTableDataSource<Tasks>(ELEMENT_DATA)//Add data to the table rows      
      
      //Create a new array with unique topics, the other properties of objects contained in the array are not important
      //We only need the topic propertys of objects contained in the array
      this.taskObj = [...new Map(this.data.map((task) => [task['topic'], task])).values()]
      this.cognito.getUserDetails().then((userDetails)=>{
        if(userDetails.username === '4d5e4ae7-0b13-4494-8765-773a172cec87'){
            this.canAddTasks = true
        }
      })
      //Tell HTML that data has been loaded
      this.isDataLoaded = true;
    }).
      //Handle an error
      catch((error) => { alert(error.message) })

    //Update table with newly created data using subscriptions
    this.subscription = this.api.OnCreateTasksListener().subscribe(
      (event: any) => {
        const newTask = event.value.data.onCreateTasks;
        this.data = [newTask, ...this.data];
        console.log('executed')
        console.log(this.data)
        ELEMENT_DATA = this.data
        this.dataSource = new MatTableDataSource<Tasks>(ELEMENT_DATA)
        this.myTable.renderRows();
      }
    );
    
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();//Delete real time updater
    }
    this.subscription = null;//Delete real time updater
  }
  addTask(newData: CreateTasksInput): void {
    //Send data to the database with the info entered by the user
    this.api.CreateTasks(newData).
      then((newTask) => {
        alert('Task ' + newTask.id + ' created successfully')
      }).
      //Handle an error
      catch((error) => { alert(error.message) })
      
  }


  signOut(): void {
    //Sign the user out from the system
    this.cognito.signOut().then(() => {
      alert('Goodbye, see you next time.')
      //Redirect the user to the sign up page
      this.router.navigateByUrl('/sign-in')
    }).
      //Handle an error
      catch((error) => { alert(error.message) })
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent,{
      width:'50%'
    })

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`)
      if(result.title !== '' && result.topic !== '' && result.completionDate !== ''){
        this.addTask(result)
      }
    })
  }

}
//Define table rows
let ELEMENT_DATA: Tasks[] = []