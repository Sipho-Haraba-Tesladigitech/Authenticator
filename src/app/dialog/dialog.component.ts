import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { FloatLabelType } from '@angular/material/form-field';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  topic = new FormControl('', [Validators.required]);
  title = new FormControl('', [Validators.required]);
  status = new FormControl('', [Validators.required]);
  completionDate = new FormControl('', [Validators.required]);  
  constructor(public matDialogRef: MatDialogRef<DialogComponent>) {
    matDialogRef.beforeClosed().subscribe(() => {
      let dataToReturn = { topic: this.topic.value, title: this.title.value, status: this.status.value?.toLowerCase() == 'completed', completionDate: this.completionDate.value }
      matDialogRef.close(dataToReturn)
    });
}

  ngOnInit(): void {

  }

}
