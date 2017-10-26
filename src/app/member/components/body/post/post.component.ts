import { Component, OnInit } from '@angular/core';
import { IPost } from '../../../..//services/post/post-interface';
import { PostService } from '../../../../services/post/post.service';


import {NgRedux, select } from '@angular-redux/store';
import { CREATE_POST } from '../../../../action';
import { IAppState } from '../../../../store';

@Component({
  selector: 'member-app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  providers:[PostService]
})
export class PostComponent implements OnInit {

  public rowSize : number;
  public toggleExpander : boolean;
  public post : IPost;

  constructor( private _post: PostService, private ngRedux: NgRedux<IAppState> ) { 
    this.rowSize = 5;
    this.toggleExpander = false;
  }

  ngOnInit() {
  }
  /** Basic Auto Expander later a simple lib can help this**/
  expandSize(){
    if (this.toggleExpander)  this.rowSize++ 
    this.toggleExpander = !this.toggleExpander;  
  }
  createPost( postMessage : string ){
    this.post ={
      id: this._post.getSize()+1,
      content:postMessage,
      comments:[]
    }
    
    //this._post.addPost( this.post );
    this.ngRedux.dispatch({type: CREATE_POST, post: this.post });
    
  }

}
