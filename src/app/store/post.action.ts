import { Action } from '@ngrx/store';
import { Post } from '../dashboard/posts/post/post.model';

export const ADD_POST = 'ADD_POST';
export const DELETE_POST = 'DELETE_POST';


export class AddPost implements Action {
    readonly type = ADD_POST;
    constructor(public payload:Post){}
}   

export class DeletePost implements Action {
    readonly type = DELETE_POST;
    constructor(public payload:number){}
}


export type PostAction = AddPost | DeletePost;


