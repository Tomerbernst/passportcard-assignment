import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "../app/dashboard/header/header.component";
import { PostsComponent } from "../app/dashboard/posts/posts.component";
import { PostComponent } from "./dashboard/posts/post/post.component";
import { FilterPostsComponent } from "../app/dashboard/filter-posts/filter-posts.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { postReducer } from "./store/post.reducer";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { PostsInterceptorService } from "./dashboard/posts/posts-interceptor.service";
import { AlertComponent } from "./shared/components/alert/alert.component";
import { SearchPostPipe } from "./pipes/search-post.pipe";
import { RouterModule, Routes } from "@angular/router";

const appRouts: Routes = [{ path: "", component: DashboardComponent }];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostsComponent,
    PostComponent,
    FilterPostsComponent,
    DashboardComponent,
    AlertComponent,
    SearchPostPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({ postRed: postReducer }),
    StoreDevtoolsModule.instrument(),
    InfiniteScrollModule,
    FormsModule,
    RouterModule.forRoot(appRouts),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: PostsInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
