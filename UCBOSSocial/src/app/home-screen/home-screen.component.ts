import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css'],
})
export class HomeScreenComponent {

  commentToReplayValue='';
  
 
  


  // It is used submitting comment data.
  @ViewChild('commnetForm')commentform:NgForm;
  // It is used replay submitting data. 
  @ViewChild('submitReplyComment')submitReplyComment:NgForm;
  // It is used to reply to reply submitting data.
  @ViewChild('replayToRepalyMessage')replayToRepalyMessage:NgForm;
 // It is used to add Update Story.
  @ViewChild('addUpdateStoryForm')addUpdateStoryForm:NgForm;

 
  // it is used to  visable the image full screen 
  imageFullScreen=false;
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

 // It is used to disbled or enabled textAreaField.
 textAreaField=false;
 //It is used emojimartIcon boolean value purpose.
 emojiMartIcon=false;
 //It is used to replay on disbled or enabled Like icon
 replayLikeCountIcon=true;
 //It is used to replay on disbled or enabled unLike icon
 replayUnLikeCountIcon=false;

 //It is used replay emojimarticon boolean value.
 replayEmojiMartIcon=false;
 // It is used replay emojimarticon boolean value.
 replayToEmojiMartIcon=false;

 //It is used open replay comment text.
 // store the value in localstrogae
 textvalues:any='';
// store the value in local storage.
replayTextvalues:any='';


  // It is used to open replay comment text
 openReplayCommentText=false;
  constructor(private el: ElementRef, private renderer:Renderer2,private router:Router, public formbuilder: FormBuilder){}

  ngOnInit(){
    localStorage.setItem('homePageBooleanValue','true');
    this.textvalues=localStorage.getItem('commentData');
    this.replayTextvalues=localStorage.getItem('replayCommentData');

    this.gettingDate = new Date(parseInt(localStorage.getItem('key'))).toLocaleString();
  }

ngAfterViewInit(){
this.renderer.setStyle(this.el.nativeElement.ownerDocument.body,'overflow-y', 'scroll');
this.renderer.setStyle(this.el.nativeElement.ownerDocument.body,'background-color', '#f3f2ef');
}

// show dialog post story
showDialogPostStory() {  
    this.visiblePostStory = true; 
}

// Submitting the update story details.
addUpdatedStory(){
  console.log(this.addUpdateStoryForm.value); 
}

//
cancelUpdatedStory(){
  this.addUpdateStoryForm.reset();
  this.visiblePostStory=false;
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

// open to the logout form.
logoutForm(){
  this.router.navigate(['/loginPage']);
  localStorage.setItem('loginBooleanValue','false');
  localStorage.setItem('captchaBooleanValue','false');
  localStorage.setItem('homePageBooleanValue','false');
  }
  
  // It is used  open Image full screen
  openImageFullScreen(){
    this.imageFullScreen=true;
  }
  
  // submitting the comment data
  submittingCommentData(){
//     const myBlogs:[] = this.CommentTextValue;
// localStorage.setItem('commentData', JSON.stringify(myBlogs));
    localStorage.setItem('commentData',this.CommentTextValue);
    this.textvalues=localStorage.getItem('commentData');
    this.commentform.reset();
    this.emojiMartIcon=false;
  }

  // submitting the reply comment data
  SubmitReplayToRepalyMessage(){
    localStorage.setItem('replayCommentData',this.commentReplayValue);
  this.replayTextvalues=localStorage.getItem('replayCommentData');
    this.submitReplyComment.reset();
    this.replayEmojiMartIcon=false; 
  }

//submitting replay to replay comment data.
  SubmitToReplayToRepalyMessage(){
    localStorage.setItem('replayToCommentData',this.commentToReplayValue);
    this.replayTextvalues=localStorage.getItem('replayToCommentData');
      this.submitReplyComment.reset();
      this.replayToEmojiMartIcon=false; 
  }

    addEmoji(event:any){
    const text = `${this.CommentTextValue}${event.emoji.native}`;
    this.CommentTextValue= text;
      }
  
      addReplayEmoji(event:any){
        const text = `${this.commentReplayValue}${event.emoji.native}`;
        this.commentReplayValue= text;
      }

      addReplayToEmoji(event){
        const text = `${this.commentToReplayValue}${event.emoji.native}`;
        this.commentToReplayValue=text;
      }
  // It is used to like a post
likePost(){
  this.likeCountIcon=false;
  this.unLikeCountIcon=true;
  this.countLikes=this.countLikes+1; 
  localStorage.setItem("key",JSON.stringify( this.uploadDate.getTime()));
}
uploadDate=new Date();
gettingDate:any;

//It is used to unlike a post
unLikePost(){
  this.likeCountIcon=true;
  this.unLikeCountIcon=false;
  this.countLikes=this.countLikes-1;
}



replayLikePost(){
  this.replayLikeCountIcon=false;
  this.replayUnLikeCountIcon=true;
}
replayUnLikePost(){
  this.replayLikeCountIcon=true;
  this.replayUnLikeCountIcon=false;
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
 replayToEmojiSmileIcon(){
  if(this.replayToEmojiMartIcon){
    this.replayToEmojiMartIcon=false;
  }
  else{
    this.replayToEmojiMartIcon=true;
  }
 }
 
    closedReplayCommentDetails(){
      this.submitReplyComment.reset();
      this.replayEmojiMartIcon=false; 
      this.openToReplayCommentText=false;
    } 
    
    closedToReplayCommentDetails(){
      this.replayToRepalyMessage.reset();
      this.replayToEmojiMartIcon=false;
      this.openReplayCommentText=false;
    }

   
   
    onUpload(event:any) {
      let reader = new FileReader(); // HTML5 FileReader API
      let file = event.files[0];
      if (event.files && event.files[0]) {
        reader.readAsDataURL(file);
        // When file uploads set it to file formcontrol
        reader.onload = () => {
          this.addUpdateStoryForm.value.patchValue({
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
  ];
  

  }
