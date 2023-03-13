import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { post } from './classs/post';

@Injectable({
  providedIn: 'root'
})
export class FreeserviceService {

  constructor(private httpclient:HttpClient) { }

  getcomments():Observable<any>{
     return  this.httpclient.get('http://localhost:3000/posts')
  }
  getcommentbyparameter():Observable<any>{
    let params1 =new HttpParams().set('postid',"1");

return this.httpclient.get('http://localhost:3000/posts',{params:params1})
  }
post(opost:post):Observable<any>{
return this.httpclient.post('http://localhost:3000/posts',opost);
}

}
