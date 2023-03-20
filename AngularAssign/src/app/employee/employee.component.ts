import { Component, ViewChild } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

import { FileUpload } from 'primeng/fileupload';



@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  EmployeeForm : FormGroup;
 

 
  initialization(){
  this.EmployeeForm = new FormGroup({
    'myfile':new FormControl(),
    'employeeId':new FormControl(),
    'firstName':new FormControl(),
    'lastName':new FormControl(),
    'male':new FormControl(),
    'female':new FormControl(),
    'customgender':new FormControl(),
    'dob':new FormControl(),
    'email':new FormControl(),
    'BloodGroup': new FormControl(),
    'Address': new FormControl(),
    'Department':new FormControl(),
    'dateOfJoining':new FormControl(),
    'salary':new FormControl(),
    'shift':new FormControl(),
    'createdSource':new FormControl(),
    'createdSourceType': new FormControl(),
    'createdDttm':new FormControl(),
    'modifiedSource':new FormControl(),
    'modifiedSourceType':new FormControl(),
    'modifiedDttm':new FormControl()
  })
  }
  ngOnInit(){
    this.initialization();
    
  }
  upload(data){
    console.log(data)
  }

  onSubmit(){
    console.log(this.EmployeeForm.value)
  }
}
