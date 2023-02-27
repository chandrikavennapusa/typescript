import { Component, ElementRef, Input, Renderer2, } from '@angular/core';
import { ExternalReference } from '@angular/compiler';
import { vedios } from './vedio';
import { enroll1 } from './service/service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[
    enroll1
  ]
})
export class AppComponent {
  title = 'classcolors';
  vedio = [
    {title:'my vedio1',share:415 ,likes:97 , disliked:12 , thumbani:'https://www.ilovepdf.com/img/ilovepdf/social/en-US/imagepdf.png'},
    {title:'my vedio2',share:400 ,likes:7 , disliked:10 , thumbani:'https://www.ilovepdf.com/img/ilovepdf/social/en-US/imagepdf.png'},
    {title:'my vedio3',share:335 ,likes:15 , disliked:32 , thumbani:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt9BemH5eQCrA17z9dZ8apv3UkQopcjfT3Bw&usqp=CAU'},
    {title:'my vedio4',share:200 ,likes:27 , disliked:22 , thumbani:'https://www.ilovepdf.com/img/ilovepdf/social/en-US/imagepdf.png'}
  ];
  

//   sortedvedio = this.sortedvedio1();
//   sortedvedio1(){
//       let vedios =[...this.vedio];
//      return  vedios.sort((n,c)=> c.share-n.share)[0];
//   }
// }
sortedvedio = this.sortedvedio1();

  sortedvedio1() {
    let vedios =[...this.vedio];
     return vedios.sort(this.compare) [0];
  }
  
   compare( a:any, b:any ) {
    if ( a.share < b.share ){
      return 1;
    }
    if ( a.share > b.share ){
      return -1;
    }
    return 0;
  }
display:boolean=false;
displayed(){
  this.display=true;
}
// onenro(){                                                     // create services
//   const enroll = new enroll1();
// enroll.onenroll(this.title);
// }

constructor( private enrollser: enroll1){}
onenro(){    
  this.enrollser.onenroll(this.title);
}
}

