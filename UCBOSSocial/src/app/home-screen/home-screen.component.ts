import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css'],
})
export class HomeScreenComponent {
 // It is used to the visable the p-dialogbox.
 visible: boolean=false;
 // It tells the location of the p-dialogbox.
 position: string='';
 // It is used to the visable post story boolean value purpose.
 visiblePostStory: boolean=false;
 // upload images on files.
 uploadedFiles: any[] = [];
   // It is used for the CommentTextValue two way data binding.
   CommentTextValue:any='';
   // Like count value
   countLikes:any=0;
   // It is used to disbled or enabled like icon.
   likeCountIcon=true;
   // It is used to disbled or enabled Like icon.
   unLikeCountIcon=false;
 // It is used to Reply comment value to reply.
 commentReplayValue:any=''
 // It is used to  disbled or enabled dislike icon.
 disLikeCountIcon=true;
 //It is used to  disbled or enabled dislike icon.
 unDisLikeCountIcon=false;

 // It is used to disbled or enabled textAreaField.
 textAreaField=false;
 //It is used emojimartIcon boolean value purpose.
 emojiMartIcon=false;
 //It is used to replay on disbled or enabled Like icon
 replayLikeCountIcon=true;
 //It is used to replay on disbled or enabled unLike icon
 replayUnLikeCountIcon=false;
 
 replayDisLikeCountIcon=true;
 replayDisUnLikeCountIcon=false;
 //It is used replay emojimarticon boolean value.
 replayEmojiMartIcon=false;
 //It is used open replay comment text.
 
 // store the value in localstrogae
 textvalues:any='';

 openReplayCommentText=false;
  constructor(private el: ElementRef, private renderer:Renderer2,private router:Router, public formbuilder: FormBuilder){}
  

ngAfterViewInit(){
this.renderer.setStyle(this.el.nativeElement.ownerDocument.body,'overflow-y', 'scroll');
this.renderer.setStyle(this.el.nativeElement.ownerDocument.body,'background-color', '#f3f2ef');
}
ngOnInit(){
  localStorage.setItem('homePageBooleanValue','true');
  this.textvalues=localStorage.getItem('commentData');
  this.replayTextvalues=localStorage.getItem('replayCommentData');
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
// show dialog post story
showDialogPostStory() {  
  if(this.visiblePostStory){
    this.visiblePostStory=false;
  }
  else{
    this.visiblePostStory = true;
  }
}
// open to the logout form.
logoutForm(){
  this.router.navigate(['/loginPage']);

  localStorage.setItem('loginBooleanValue','false');
  localStorage.setItem('captchaBooleanValue','false');
  localStorage.setItem('homePageBooleanValue','false');
  }
  
  // submitting the comment data
  submittingCommentData(){
    console.log(localStorage.getItem('commentData'));
//     const myBlogs:[] = this.CommentTextValue;
// localStorage.setItem('commentData', JSON.stringify(myBlogs));
    localStorage.setItem('commentData',this.CommentTextValue);
    this.textvalues=localStorage.getItem('commentData');
    this.CommentTextValue='';
    this.emojiMartIcon=false;
  }
  // It is used to like a post
likePost(){
  this.likeCountIcon=false;
  this.unLikeCountIcon=true;
  this.countLikes=this.countLikes+1; 
}
//It is used to unlike a post
unLikePost(){
  this.likeCountIcon=true;
  this.unLikeCountIcon=false;
  this.countLikes=this.countLikes-1;
}
// It is used to dislike a post
disLikePost(){
  this.disLikeCountIcon=false;
  this.unDisLikeCountIcon=true;
}
// It is used to un dislike a post
unDisLikePost(){
  this.disLikeCountIcon=true;
  this.unDisLikeCountIcon=false;
}

replayLikePost(){
  this.replayLikeCountIcon=false;
  this.replayUnLikeCountIcon=true;
}
replayUnLikePost(){
  this.replayLikeCountIcon=true;
  this.replayUnLikeCountIcon=false;
}

replayDisLikePost(){
  this.replayDisLikeCountIcon=false;
  this.replayDisUnLikeCountIcon=true;
}
replayDisUnLikePost(){
  this.replayDisLikeCountIcon=true;
  this.replayDisUnLikeCountIcon=false;
}
 //It is used to disbled or enabled messageIcon.
//  messageIcon=true;
//  this.messageIcon=true;
// *ngIf="messageIcon"
// It is used to the open the comment textarea.
displayMessageTextArea(){

  if(this.textAreaField){
    this.textAreaField=false;
  }
  this.textAreaField=true;
 }
 emojiStarFill(){
  if(this.emojiMartIcon){
    this.emojiMartIcon=false;
  }
  else{
    this.emojiMartIcon=true;
  }
 }
 emojiSmileIcon(){
  if(this.replayEmojiMartIcon){
    this.replayEmojiMartIcon=false;
  }
  else{
    this.replayEmojiMartIcon=true;
  }
 }
 
 addEmoji(event:any){
  const text = `${this.CommentTextValue}${event.emoji.native}`;
  this.CommentTextValue= text;
    }

    addReplayEmoji(event:any){
      const text = `${this.CommentTextValue}${event.emoji.native}`;
      this.commentReplayValue= text;
    }

    closedReplayCommentDetails(){
      this.commentReplayValue='';
      this.openReplayCommentText=false;
      this.emojiSmileIcon();
    }
    replayTextvalues:any='';

    SubmitReplayToRepalyMessage(){
      localStorage.setItem('replayCommentData',this.commentReplayValue);
    this.replayTextvalues=localStorage.getItem('replayCommentData');
      this.commentReplayValue='';
      this.replayEmojiMartIcon=false;
    }
    registrationForm = this.formbuilder.group({
      file: [null],
      textArea: [null, [Validators.required]]
    });
    addUpdatedStory(){
      console.log(this.registrationForm.value); 
    }
    // upload image files.
  onUpload(event:any) {
    let reader = new FileReader(); // HTML5 FileReader API
    let file = event.files[0];
    console.log(event.files[0])
    if (event.files && event.files[0]) {
      reader.readAsDataURL(file);
      // When file uploads set it to file formcontrol
      reader.onload = () => {
        this.registrationForm.patchValue({
          file: reader.result
        }); 
      }
    }
  }

  images=[
    {name:'ad1.jpg'},
    {name:'ad2.jpg'},
    {name:'ad3.jpg'}
  ]
  // image:any='./assets/book11.jpg';


  openReplayCommentDetails(){
    this.openReplayCommentText=true;
    this.replayEmojiMartIcon=false;
  }

  openToReplayCommentText=false;
  openToReplayCommentDetails(){
this.openToReplayCommentText=true;
  }


  vedios=[
    {name:'ad4.mp4'},
  ]

  }
