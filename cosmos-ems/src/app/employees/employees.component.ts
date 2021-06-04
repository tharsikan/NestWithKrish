import { Component, OnInit } from '@angular/core';
import employees from './data/employees.json';
@Component({
  selector: 'em-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit {
  employees: any[] = employees;
  title = 'Employee management solution';
  showName = true;
  toggleName(): void {
    this.showName = !this.showName;
  }
  constructor() {}
  ngOnInit(): void {}
}
