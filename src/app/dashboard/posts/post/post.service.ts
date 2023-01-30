import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Post } from "./post.model";
import * as PostAction from "../../../store/post.action";

@Injectable({
  providedIn: "root",
})
export class PostService {
  constructor(private store: Store<{ postRed: { posts: Post[] } }>) {}

  deletePost(id: number) {
    this.store.dispatch(new PostAction.DeletePost(id));
  }
}
