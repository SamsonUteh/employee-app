import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
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
  displayedColumns: string[] = ['options', 'DepartmentID', 'DepartmentName'];
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  // ngAfterViewInit() {
  //   this.listData.sort = this.sort;
  // }

  ngOnInit(): void {
    this.refreshDepartmentList();
  }

  refreshDepartmentList(){
    this.departmentService.getDepartmentList().subscribe(data => {
      this.listData = new MatTableDataSource(data);
      this.listData.sort = this.sort;

    })
  }

  onEdit(dept: Department){
    console.log(dept);
  }

  onDelete(id: number){
    console.log(id)
  }

}
