import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Post } from "./posts/post/post.model";
import { PostsService } from "./posts/posts.service";
import * as PostAction from "../store/post.action";
import { Subscription } from "rxjs";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent {
  constructor(
    private postService: PostsService,
    private store: Store<{ postRed: { posts: Post[] } }>
  ) {}
  page: number = 1;
  limit: number = 20;
  postServiceSubscription: Subscription;
  ngOnInit() {
    this.getPosts(this.page, this.limit);
  }

  getPosts(page: number, limit: number) {
    this.postServiceSubscription = this.postService
      .getAllPosts()
      .subscribe((posts) => {
        const slicedPosts: Post[] = posts.slice(
          (page - 1) * limit,
          page * limit
        );
        slicedPosts.forEach((post) => {
          this.store.dispatch(new PostAction.AddPost(post));
        });
      });
  }

  loadMore() {
    this.page++;
    this.getPosts(this.page, this.limit);
  }

  ngOnDestroy() {
    this.postServiceSubscription.unsubscribe();
  }
}
