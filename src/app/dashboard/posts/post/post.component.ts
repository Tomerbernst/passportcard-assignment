import { Component, Input } from "@angular/core";

import { Subject } from "rxjs";
import { PostService } from "./post.service";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"],
})
export class PostComponent {
  @Input() id: number;
  @Input() title: string;
  @Input() desc: string;
  searchQuery$: Subject<string>;
  showDropdown: boolean = false;
  showAlert: boolean = false;

  constructor(private postService: PostService) {}

  ngOnInit() {}

  deletePostValidate() {
    this.showAlert = true;
  }

  okClickHandler(id: number) {
    this.showAlert = false;
    this.postService.deletePost(id);
  }

  cancelClickHandler() {
    this.showAlert = false;
  }
}
