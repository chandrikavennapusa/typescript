import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormControlName, FormArray, EmailValidator } from '@angular/forms'
import { Observable } from 'rxjs';
import { __values } from 'tslib';
@Component({
  selector: 'app-react',
  templateUrl: './react.component.html',
  styleUrls: ['./react.component.css']
})
export class ReactComponent {
  gender=[
    {id:1,value:"male"},
    {id:2,value:"female"},
    {id:3,value:"others"}
  ]
  reactiveform : FormGroup;
  formstatus;
       ngOnInit(){
        this.initialization();
        this.reactiveform.get('reactivesubform.frist').valueChanges.subscribe((value)=>{
          console.log(value);
        })
        this.reactiveform.valueChanges.subscribe((value)=>{
          console.log(value);
        })
        this.reactiveform.statusChanges.subscribe((__values)=>{
          console.log(__values);
          this.formstatus=__values;
        })
      //  setTimeout(() => {
      //   this.reactiveform.setValue({
      //     reactivesubform:{
      //       frist:'',
      //       email:'abc@gmail.com'
      //     },
      //     country:'',
      //     gender1:'',
      //     age:'',
      //     skills:[]
      //   })
      //  }, 2000);
      
       setTimeout(() => {
        this.reactiveform.patchValue({
          reactivesubform:{
            
            email:'abc@gmail.com'
          },
          
        })
       }, 2000);
       setTimeout(() => {
        this.reactiveform.reset({
          reactivesubform:{
            frist:'',
            email:'abc@gmail.com'
          },
          country:'',
          gender1:'',
          age:'',
          skills:[]
        })
       }, 5000);
       }

       
       submitform(){
              console.log(this.reactiveform.value);
       }
     

       initialization(){
        this.reactiveform =  new FormGroup({
          reactivesubform:new FormGroup({
            'frist':new FormControl(null,[Validators.required]),          //, this.noSpaceAlloewd]
            'email':new FormControl(null,[Validators.email,Validators.required] , this.emailrequierd)
          }),
          
         'country':new FormControl('india'),
          'gender1':new FormControl(null,[Validators.requiredTrue]),
          'age':new FormControl(null,[Validators.min(2),Validators.required]),
           'skills':new FormArray([
            new FormControl(null,Validators.required),
            
            // new FormControl(null,Validators.required),
            // new FormControl(null,Validators.required)
           ])
        });

       }
    // noSpaceAlloewd(control:FormControl){
    //   if(control.value !=null && control.value.indexOf('') != -1){
    //      return {noSpaceAlloewd:true};
    //   }
    //   return null;
    // }
     emailrequierd(control:FormControl) :Promise<any> | Observable<any>{  // async validation
      const response = new Promise((resolve,reject)=>{
        setTimeout(() => {
          if(control.value === 'proacedamy@gmail.com'){
              resolve ({emailrequierd: true})
          }else{
            resolve(null)
          }
        }, 1000);
      })
      return response ;
     }

    
    
}
