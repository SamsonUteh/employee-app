import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {

  constructor(public dialogbox: MatDialogRef<AddDepartmentComponent>) { }

  ngOnInit(): void {
  }

  onClose(){
    this.dialogbox.close();
  }

}
