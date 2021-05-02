import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

const  _API = "https://jsonplaceholder.typicode.com/posts";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }

  getPost()
  {
    
    return this.http.get(_API)
    // .pipe(
    //   map((resp:Array<any>) => {

    //     return resp.sort((a: any, b: any) => { return b.puntaje - a.puntaje });

    //   })
    // )
  }


  savePost(title:string, body: string, userId: number){
    const data ={
      "title": title,
      "body": body,
      "userId": userId,
      }

      return this.http.post(_API, data);
  }

  getComments(postId:number){
    
    return this.http.get(_API + "/"+ postId +"/comments" );
  }
}
