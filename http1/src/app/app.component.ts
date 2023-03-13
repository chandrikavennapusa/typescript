import { Component } from '@angular/core';
import { FreeserviceService } from './freeservice.service';
import { Comments } from './classs/comments';
import { post } from './classs/post';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'http1';
    listcomments:Comments[];
   listpost:post[];
   objpost:post;

  constructor(private freeappservice:FreeserviceService){}
  ngOnInit(){
    this.freeappservice.getcomments().subscribe(
      data =>{
              this.listcomments=data;
      }
    );
    this.freeappservice.getcommentbyparameter().subscribe(
      data =>{

      this.listpost=data;
    });
    var opost = new post();
    opost.postid=2;
  
    opost.name="kamal";
    opost.body="test";
   
 



    this.freeappservice.post(opost).subscribe(
      data =>{
             this.objpost=data;
      }
    )
  }
 

}
