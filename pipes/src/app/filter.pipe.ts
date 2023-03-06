import { Pipe, PipeTransform } from '@angular/core';
import { ListService } from './list.service';
@Pipe({
  name: 'filter',
  pure:false
})
export class FilterPipe implements PipeTransform {

  transform(value:any,filtertext:string){
    if(value.length === 0 || filtertext === ''){
    return value;
    console.log(value);
    }
  else{
   return value.filter((lists:any)=>{
  return lists.gender.toLowerCase() === filtertext.toLowerCase();
 }

   ) 
  }
  }
}
