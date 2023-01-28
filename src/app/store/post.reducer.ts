import * as PostAction from '../store/post.action'

const initialState = {
  posts: []
};

export function postReducer(
  state = initialState,
  action: PostAction.PostAction
) {
  switch (action.type) {
    case PostAction.ADD_POST: 
        return {
          ...state,
          posts: [...state.posts, action.payload]
        };
    case PostAction.DELETE_POST:
      return {
        ...state,
        posts: [
          ...state.posts.filter((post) => {
            return !(post.id == action.payload);
          })
        ]
      };
    default: {
      return state;
    }
  }
}
