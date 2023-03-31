import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild} from '@angular/core';
import {  NgForm } from '@angular/forms';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { table } from 'console';
import { ConfirmationService, Message } from 'primeng/api';
import { Observable } from 'rxjs';

import { ServicesService } from '../services.service';





@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  gettingempdata;
  errorMessage: any;
  empId: string;


  dialogFormHidden=false;
  successmessagedataEle=false;
  errormessagedataEle=false;

  addbtndisable=true;
  deleteviewmode=true;
  errormessagedata: Message[];
  sucessmessagedata: Message[];
  first = 0;

  rows = 10;
  constructor(private service:ServicesService,private router:Router ,private confirmationService: ConfirmationService){}

   doubleClick(rowdata){
    this.service.setData(rowdata);
    this.router.navigate(['/EMPLIST']);
  }

  ngOnInit(){
    this.gettingData();
    let username =localStorage.getItem("username");
    if(username == "employee" ){
      this.addbtndisable=false;
     this.deleteviewmode=false;
 }
  
   }


  deletebasedonempid(id){
    this.confirmationService.confirm({
      message: 'Row Delete Congormation Box.',
      header: 'Employee Row',
      accept: () =>{this.delete(id)} 
  });
   
  }


  delete(id){
        this.service.deleteempid(id).subscribe( 
          response=>{ console.log(response);
          console.log("response block");
          } ,

          (err:HttpErrorResponse) =>{

            this.sucessmessagedata=
            [
              {
                severity: 'success', 
                summary: 'Employee list', 
                detail:err.error.text
              }
            ]
            
               this.successmessagedataEle=true;
              this.errormessagedataEle=false;
            console.log(err.error)
            console.log("error block");
            this.gettingData();
          },
          ()=>{
            console.log("complete");
            console.log("sucess block");
          }
        );
  }

  gettingData(){
    this.service.gettingempdetails().subscribe(
    data=> this.gettingempdata=data,
    error => this.errorMessage = error
  );
   }


  cancelempidbtn(){
    this.empId='';
    this.dialogFormHidden=false;
   
  }

  isboolean;
      empidcheck(){
        this.isboolean=false;
        console.log(this.gettingempdata);

       this.gettingempdata.find((empdata)=> { 
          if(empdata.employeeId == this.empId){
            console.log("alredy exit that number");
            this.isboolean=true;
          } else{
            console.log("id is not their");
             }
        })

        if(this.isboolean == true){
          this.errormessagedata=[
                                              {
                                                   severity: 'error', 
                                                    summary: 'Employee list', 
                                                  detail:"the id is alredy exist"
                                                  }
            
                                 ] 
                                 this.successmessagedataEle=false;
                                 this.errormessagedataEle=true;
                                this.dialogFormHidden=false;
        }
        else{
          this.sucessmessagedata=
          [
            {
              severity: 'success', 
              summary: 'Employee list', 
              detail:"enter the table fields"
            }
          ]
          
             this.successmessagedataEle=true;
            this.errormessagedataEle=false;
            this.dialogFormHidden=false;
            this.router.navigate(['/EMPFORM']);
            this.service.emplyeeid=this.empId;
         
         
        }
        this.empId='';
      }
      empiddialogbox(){
        this.dialogFormHidden=true;
      }

     

}



