import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { Post } from './post/post.model';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  posts$: Observable <{posts: Post[]}>;

  constructor(private postService:PostsService,
    private store: Store<{postRed:{posts:Post[]}}>
    ){}

    ngOnInit(){
      this.posts$ = this.store.select('postRed');
    }


}
/*
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
*/