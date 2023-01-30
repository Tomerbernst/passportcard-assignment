import { Component, EventEmitter, Output } from "@angular/core";
import { Store } from "@ngrx/store";
import { BehaviorSubject, map, Observable } from "rxjs";
import { SearchPostService } from "../filter-posts/filter-posts.service";
import { Post } from "./post/post.model";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.scss"],
})
export class PostsComponent {
  @Output() loadMore = new EventEmitter<string>();
  posts$: Observable<{ posts: Post[] }>;
  searchQuery$ = new BehaviorSubject<string>("");
  searchQueryValue: string;
  constructor(
    private store: Store<{ postRed: { posts: Post[] } }>,
    private searchPostService: SearchPostService
  ) {}

  ngOnInit() {
    this.searchQueryValue = localStorage.getItem("searchQuery") || "";
    if (this.searchQueryValue !== "") {
      this.searchPostService.updateSearchQuery(this.searchQueryValue);
    }
    this.searchQuery$ = this.searchPostService.searchQuery$;
    this.posts$ = this.store.select("postRed");
  }

  loadMorePosts() {
    this.loadMore.emit();
  }
}
