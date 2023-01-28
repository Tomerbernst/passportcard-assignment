import { Component, ElementRef, ViewChild } from '@angular/core';
import { debounceTime, fromEvent } from 'rxjs';
import { SearchPostService } from './filter-posts.service';

@Component({
  selector: 'app-filter-posts',
  templateUrl: './filter-posts.component.html',
  styleUrls: ['./filter-posts.component.scss']
})
export class FilterPostsComponent {
  result='';
  @ViewChild('searchQuery') searchQuery: ElementRef;

  constructor(private searchPostService: SearchPostService){}


  ngAfterViewInit(){
    this.searchQuery.nativeElement.value = window.localStorage.getItem('searchQuery');
    fromEvent(this.searchQuery.nativeElement, 'keyup')
    .pipe(
      debounceTime(1000)
    )
    .subscribe((data => {
      this.result = this.searchQuery.nativeElement.value;
      this.searchPostService.updateSearchQuery(this.result.toLocaleLowerCase());
    }));
  }

  ngOnDestroy(){
    window.localStorage.removeItem('searchQuery');
  }
  

}
