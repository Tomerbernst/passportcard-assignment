import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { Post } from './posts/post/post.model';
import { PostsService } from './posts/posts.service';
import * as PostAction from '../store/post.action';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(private postService:PostsService,
    private store: Store<{postRed:{posts:Post[]}}>
    ){}

  ngOnInit(){
    this.postService.getPosts()
    .pipe(
      map(posts =>{
        posts.forEach(post =>{
          this.store.dispatch(new PostAction.AddPost(post));
        })
      })
    )
    .subscribe();
  }

}
