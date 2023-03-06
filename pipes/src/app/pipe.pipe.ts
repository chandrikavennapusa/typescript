import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(value: number,totalmarks:number,decimal:number): unknown {
    return (value/totalmarks*100).toFixed(decimal);
  }

}
