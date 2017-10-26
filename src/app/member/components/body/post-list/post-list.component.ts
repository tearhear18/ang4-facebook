import { Component, OnInit } from '@angular/core';
import { IPost } from '../../../../services/post/post-interface';
import { PostService } from '../../../../services/post/post.service';

import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../../../store';
import { CREATE_POST } from '../../../../action';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  providers:[PostService]
})
export class PostListComponent implements OnInit {
  

  public posts : any[];
  
  constructor(private _post : PostService, private ngRedux: NgRedux<IAppState>) { 
      
  }

  ngOnInit() {
    this.ngRedux.subscribe( ()=>{
      let action = this.ngRedux.getState();
      switch( action.type ){
        case CREATE_POST:
          this.posts.unshift(action.post);
        break;
      }
    }); 
    this.posts = this._post.getPost();

  }
  
  
  
  



}
