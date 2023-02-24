import { Component, ElementRef, Input, Renderer2 } from '@angular/core';
import { vedios } from './vedio';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'classcolors';
  vedio = [
    {title:'my vedio1',share:415 ,likes:97 , disliked:12 , thumbani:'https://www.ilovepdf.com/img/ilovepdf/social/en-US/imagepdf.png'},
    {title:'my vedio2',share:400 ,likes:7 , disliked:10 , thumbani:'https://www.ilovepdf.com/img/ilovepdf/social/en-US/imagepdf.png'},
    {title:'my vedio3',share:335 ,likes:15 , disliked:32 , thumbani:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt9BemH5eQCrA17z9dZ8apv3UkQopcjfT3Bw&usqp=CAU'},
    {title:'my vedio4',share:200 ,likes:27 , disliked:22 , thumbani:'https://www.ilovepdf.com/img/ilovepdf/social/en-US/imagepdf.png'}
  ]
   
  data=[
    {name:"abc",number:"456"},
    {name:"abc1",number:"456a"},
    {name:"abc3",number:"456v"}
  ]

  sortedvedio = this.sortedvedio1();
  sortedvedio1(){
      let vedios =[...this.vedio];
     return  vedios.sort((c,n)=> c.share-n.share)[0];
  }
}

// function name(vedio:vedios){
 
// }




