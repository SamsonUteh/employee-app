import { Component, OnInit } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Deparatment } from 'src/app/models/department-model';

@Component({
  selector: 'app-show-department',
  templateUrl: './show-department.component.html',
  styleUrls: ['./show-department.component.css']
})
export class ShowDepartmentComponent implements OnInit {

  constructor() { }
  listData!: MatTableDataSource<any>;
  displayedColumns: string[] = ['options', 'departmentId', 'departmentName']

  ngOnInit(): void {
    this.refreshDepartmentList();
  }

  refreshDepartmentList(){
    let dummyData = [
      {departmentId: 1, departmentName: "IT"},
      {departmentId: 2, departmentName: "Accounts"}
    ];

    this.listData = new MatTableDataSource(dummyData);
  }

  onEdit(dept: Deparatment){
    console.log(dept);
  }

  onDelete(id: number){
    console.log(id)
  }

}
