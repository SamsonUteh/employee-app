import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from '../models/department-model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  formData!: Department;
  constructor(private http: HttpClient) { }


  readonly apiUrl = "http://localhost:49902/api";
  getDepartmentList(): Observable<Department[]> {
    return this.http.get<Department[]>(this.apiUrl + '/department')
  }

}
