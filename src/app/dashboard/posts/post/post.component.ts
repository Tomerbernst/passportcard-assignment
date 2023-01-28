import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Post } from './post.model';
import * as PostAction from '../../../store/post.action';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  @Input() id: number;
  @Input() title: string;
  @Input() desc: string;
  searchQuery$: Subject<string>;

  constructor( 
    private store: Store<{postRed:{posts:Post[]}}>){}

  ngOnInit(){
  }
  
  deletePost(id:number){
    this.store.dispatch(new PostAction.DeletePost(id));
  }


}
