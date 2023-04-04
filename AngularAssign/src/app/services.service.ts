import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Message } from 'primeng/api/message';




@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private httpclient:HttpClient) { }

  
  employeeid='';
  emplyeeid='';
  EmployeeId='';
  DepartmentId='';
  userloginsucessmessage: Message[];
  empidsucessmessagedata:Message[];
 usercheck(UserName,password){
  const params = new HttpParams().set('Username',UserName).set('password',password)

  return this.httpclient.get('http://localhost:9091/userAccount/checkuserexists',{params:params});
  
 }

   gettinguserdata(){
    return this.httpclient.get('http://localhost:9091/userAccount/findalluseraccounts');
   }


 
  addempdetails(EmployeeForm){

   return this.httpclient.post('http://localhost:9091/employeedetail/addemployee',EmployeeForm);
  }

   gettingempdetails(){
    return this.httpclient.get('http://localhost:9091/employeedetail/findallemployees');
   }
   
    deleteempid(id){
      const params = new HttpParams().set('employeeId',id);
 return this.httpclient.delete('http://localhost:9091/employeedetail/deletebyempid',{params:params});
    }


    //getting data in based on employeee id
     getempid(empid){
      console.log(empid);
      const params=new HttpParams().set('employeeId',empid)
      return this.httpclient.get('http://localhost:9091/employeedetail/findbyempid',{params:params})
     }


    updateempid(EmployeeForm){
     return this.httpclient.put('http://localhost:9091/employeedetail/updateemployee',EmployeeForm)
    }

     addattendencedata(form){
      return this.httpclient.post('http://localhost:9091/attendanceDetail/addAttendance',form)
    }

   gettingDeptdata(){
    return this.httpclient.get('http://localhost:9091/departmentdetail/findalldepartment');
   }
   deptdata 
    setdeptData(data){
        this.deptdata = data
    }
    getdeptData(){
      return this.deptdata;
    }
    gettingAttendencedetails(){
      return this.httpclient.get('http://localhost:9091/attendanceDetail/findAllAttendance');
    }
    attendencedata;
    setAttendencedata(data){
      this.attendencedata=data;
    }
    getAttendencedata(){
      return this.attendencedata;
    }

    updateattence(attendenceform){
      return this.httpclient.put('http://localhost:9091/attendanceDetail/updateAttendance',attendenceform);
    }

    deletebasedonempiddeptid(empid,deptid){
      const params = new HttpParams().set('employeeId',empid).set('departmentId',deptid);
      return this.httpclient.delete('http://localhost:9091/attendanceDetail/deleteByEmpIdDepId',{params:params})
    }
    

    gettingattendedatabasedonempid(empid){
      let params =new HttpParams().set('employeeid',empid);
      return this.httpclient.get('http://localhost:9091/attendanceDetail/findAttendanceByEmpId',{params:params})
    }



}
