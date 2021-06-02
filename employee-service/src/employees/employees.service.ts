import { Injectable } from '@nestjs/common';
import { Employee, EmployeeTier } from './Employee.model';
import {v1 as uuid} from 'uuid';

@Injectable()
export class EmployeesService {
    getAllEmployees(){
        return this.employees;
    }
    private employees: Employee[] =[]
    createEmployee(firstName: string, lastName: string, designation: string, nearestCity: string, tier: EmployeeTier){
        const employee = {
            id: uuid(),
            firstName,                                      // firstName: firstName es6 distrcturing feature 
            lastName,
            designation,
            nearestCity,
            tier
        }
        this.employees.push(employee);
        return employee;
    }
}
