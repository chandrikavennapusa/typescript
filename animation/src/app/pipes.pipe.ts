import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipes'
})
export class PipesPipe implements PipeTransform {

  transform(p:any , wish:any):string {
    if(p.gender =="f"){
   return `hello miss ${p.name} ${wish}`
      
    }
    else{
      return `hello Mrs ${p.name} ${wish}`
    }
  }

}
