import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {

  constructor(public dialogbox: MatDialogRef<AddDepartmentComponent>, 
              public departmentService: DepartmentService) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?: NgForm){
    if(form!=null)
    form.resetForm();

    this.departmentService.formData = {
      departmentId: 0,
      departmentName: ""
    }
  }

  onClose(){
    this.dialogbox.close();
  }

  onSubmit(form:NgForm){
    console.log(form.value)
  }

}
