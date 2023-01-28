import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Post } from "./post/post.model";

const baseUrl = environment.apiBaseUrl;

@Injectable({
  providedIn: "root"
})

export class PostsService {
        
    constructor(private http: HttpClient){}
    
    getPosts(): Observable<Post[]>{
        return this.http.get<Post[]>(`${baseUrl}/posts`);
    }



}
