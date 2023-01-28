import { Component, ElementRef, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { debounceTime, fromEvent } from 'rxjs';
import { Post } from '../posts/post/post.model';
import { SearchPostService } from './filter-posts.service';

@Component({
  selector: 'app-filter-posts',
  templateUrl: './filter-posts.component.html',
  styleUrls: ['./filter-posts.component.scss']
})
export class FilterPostsComponent {
  result='';
  @ViewChild('searchQuery') searchQuery: ElementRef;

  constructor(
    private store: Store<{postRed:{posts:Post[]}}>,
    private searchPostService: SearchPostService){}

  ngAfterViewInit(){
    fromEvent(this.searchQuery.nativeElement, 'keyup')
    .pipe(
      debounceTime(1000)
    )
    .subscribe((data => {
      this.result = this.searchQuery.nativeElement.value;
      this.searchPostService.updateSearchQuery(this.result);
      console.log(this.result);
    }));
  }
  

}
