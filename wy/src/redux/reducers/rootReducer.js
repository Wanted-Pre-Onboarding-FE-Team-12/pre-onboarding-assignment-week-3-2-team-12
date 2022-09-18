const SET_COMMENT = 'comment/SET_COMMENT';
const ADD_COMMENT = 'comment/ADD_COMMENT';
const DELETE_COMMENT = 'comment/DELETE_COMMENT';
const MODIFY_COMMENT = 'comment/MODIFY_COMMENT';

// 액션 크리에이터
export function setCommentList(commentList) {
  return {
    type: SET_COMMENT,
    payload: commentList,
  };
}

export function addComment(comment) {
  return {
    type: ADD_COMMENT,
    payload: comment,
  };
}

export function deleteComment(commentId) {
  return {
    type: DELETE_COMMENT,
    payload: commentId,
  };
}

export function modifyComment(comment, commentId) {
  return {
    type: MODIFY_COMMENT,
    payload: { comment, commentId },
  };
}

const INITIAL_STATE = { commentList: [], isLoading:true };

export default function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_COMMENT:
      console.log(action.payload)
      return { commentList:[...action.payload], isLoading:false }
/*
    case ADD_COMMENT:
      return [...state.commentList, action.payload]

    case DELETE_COMMENT:
      return state.commentList.map(comment => {
        if (comment.id !== action.payload) {
          return comment;
        }
      });

    case MODIFY_COMMENT:
      return state.commentList.map(comment => {
        if (comment.id === action.payload.commentId) {
          return action.payload.comment;
        } else {
          return comment;
        }
      });
*/
    default:
      return state;
  }
}
