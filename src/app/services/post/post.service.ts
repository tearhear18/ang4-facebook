import { Injectable } from '@angular/core';
import { IPost } from './post-interface';

@Injectable()
export class PostService {

  private posts : any[];

  constructor() { 
    this.posts = [
      {
        id:1,
        content:"<b>Awesome framework!. </b><br> sada dhasjdasjdhasjdhas jdsahd j asdjhash dajhdjashdhasdg asjdh asdhasjdhjasdh ajsdhjash ajdhsaj dsjadhasj dhjasdh sajdhjsad ajsdh jadhajs dh ",
        comments:[{
          id:1,
          content:"hello"
        }]
      },
      {
        id:2,
        content:"<h1>HELLO WORLD 2</h1> <p> sample asdas das d as d</p>",
        comments:[]
      }
    ]
  }

  getPost<IPost>(){
    return this.posts;
  }
  addPost( post: IPost ){
    this.posts.push( post );
  }
  getSize(){
    return this.posts.length;
  }
 

}
