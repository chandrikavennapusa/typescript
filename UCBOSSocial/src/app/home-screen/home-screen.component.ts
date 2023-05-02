import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent {
  // It is used to disbled or enabled heart icon.
  heartIcon=true;
  // It is used to disbled or enabled heart-fill icon.
  heartFillIcon=false;
  // It is used for the CommentTextValue two way data binding.
  CommentTextValue:any='';
  // Like count value
  countLikes:any=0;
//The time when the post was created is displayed.
date=new Date();
//It is used to disbled or enabled messageIcon.
messageIcon=true;
// It is used to disbled or enabled textAreaField.
textAreaField=false;
// It is used to the visable the p-dialogbox.
visible: boolean=false;
// It tells the location of the p-dialogbox.
position: string='';
constructor(private router:Router){}
// open to the logout form.
logoutForm(){
this.router.navigate(['/loginPage'])
}
// It is used to like a post
likePost(){
  this.heartIcon=false;
  this.heartFillIcon=true;
  this.countLikes=this.countLikes+1; 
}
//It is used to unlike a post
unLikePost(){
  this.heartIcon=true;
  this.heartFillIcon=false;
  this.countLikes=this.countLikes-1;
}
// It is used to the open the comment textarea.
displayMessageTextArea(){
 this.messageIcon=true;
this.textAreaField=true;
}
// It is used to open the showDialogbox
showDialog(position: string) {
    this.position = position;
    if(this.visible){
      this.visible=false;
    }
    else{
      this.visible=true;
    }
}
}
