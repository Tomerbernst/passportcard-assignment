import { Pipe, PipeTransform } from "@angular/core";
import { Post } from "../dashboard/posts/post/post.model";

@Pipe({
  name: "searchPost",
})
export class SearchPostPipe implements PipeTransform {
  transform(posts: Post[], searchQuery: string): any[] {
    if (!posts) {
      return [];
    }
    if (!searchQuery) {
      return posts;
    }

    searchQuery = searchQuery.toLowerCase();

    return posts.filter((post) => {
      return (
        post.title.toLowerCase().includes(searchQuery) ||
        post.desc.toLowerCase().includes(searchQuery)
      );
    });
  }
}
