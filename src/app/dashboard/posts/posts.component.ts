import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, map, Observable} from 'rxjs';
import { SearchPostService } from '../filter-posts/filter-posts.service';
import { Post } from './post/post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  @Output() loadMore = new EventEmitter<string>();
  posts$: Observable <Post[]>;
  searchQuery$ = new BehaviorSubject <string>('');
  constructor(
    private store: Store<{postRed:{posts:Post[]}}>,
    private searchPostService: SearchPostService){}

    ngOnInit(){
      this.searchQuery$ = this.searchPostService.searchQuery;
      this.posts$ = this.store.select('postRed').pipe(  
        map(({ posts }) => posts.filter(post => post.title.includes(this.searchQuery$.value)))
      );
      this.posts$.subscribe(x=>console.log(x));
    }

    loadMorePosts(){
      this.loadMore.emit();
    }
}
