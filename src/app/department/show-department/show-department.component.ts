import { Component, OnInit } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Department } from 'src/app/models/department-model';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-show-department',
  templateUrl: './show-department.component.html',
  styleUrls: ['./show-department.component.css']
})
export class ShowDepartmentComponent implements OnInit {

  constructor(private departmentService: DepartmentService) { }
  listData!: MatTableDataSource<any>;
  displayedColumns: string[] = ['options', 'departmentId', 'departmentName']

  ngOnInit(): void {
    this.refreshDepartmentList();
  }

  refreshDepartmentList(){
    // let dummyData = [
    //   {departmentId: 1, departmentName: "IT"},
    //   {departmentId: 2, departmentName: "Accounts"}
    // ];

    // this.listData = new MatTableDataSource(dummyData);

    this.departmentService.getDepartmentList().subscribe(data => {
      this.listData = new MatTableDataSource(data);
      console.log(data);
    })
  }

  onEdit(dept: Department){
    console.log(dept);
  }

  onDelete(id: number){
    console.log(id)
  }

}
