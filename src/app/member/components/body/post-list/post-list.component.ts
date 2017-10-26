import { Component, OnInit } from '@angular/core';
import { IPost } from '../../../../services/post/post-interface';
import { PostService } from '../../../../services/post/post.service';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  providers:[PostService]
})
export class PostListComponent implements OnInit {
  
  public posts : IPost[];
  
  constructor(private _post : PostService ) { 
    this.posts = _post.getPost();
  }

  ngOnInit() {
    
    
  }

}
