/** Ducks pattern */
import { Comment } from 'types/types';

/**
 * action type
 * as const: 액션 객체를 만들게 action.type의 값을 추론하는 과정에서 action.type이 string으로 추론되지 않고, 지정한 실제 문자열 값으로 추론 되도록 해주기 위해 처리
 * */
const GET_COMMENTS = 'comment/GET_COMMENTS' as const; // GET /comments
const GET_COMMENT = 'comment/GET_COMMENT' as const; // GET /comments/{commentId}
const CREATE_COMMENT = 'comment/CREATE_COMMENT' as const; // POST /comments
const UPDATE_COMMENT = 'comment/UPDATE_COMMENT' as const; // PUT /comments/{commentId}
const DELETE_COMMENT = 'comment/DELETE_COMMENT' as const; // DELETE /comments/{commentId}

/**
 * action create function
 */
export const getComments = () => {
	return {
		type: GET_COMMENTS,
		payload: [],
	};
};

export const getComment = () => {
	return {
		type: GET_COMMENT,
		payload: {},
	};
};

export const createComment = () => {
	return {
		type: CREATE_COMMENT,
		payload: {},
	};
};

export const updateComment = () => {
	return {
		type: UPDATE_COMMENT,
		payload: {},
	};
};

export const deleteComment = (id: number) => {
	return {
		type: DELETE_COMMENT,
		payload: id,
	};
};

/**
 * 모든 액션 객체들에 대한 타입 준비
 * ReturnType<typeof ____> : 특정 함수의 반환값을 추론
 */
type CommentAction =
	| ReturnType<typeof getComments>
	| ReturnType<typeof getComment>
	| ReturnType<typeof createComment>
	| ReturnType<typeof updateComment>
	| ReturnType<typeof deleteComment>;

/**
 * 이 리덕스 모듈에서 관리 할 상태의 타입 선언
 */
type CommentState = {
	comments: Comment[];
};

/**
 * 초기 상태
 */
const initialState: CommentState = {
	comments: [],
};

/**
 * Reducer
 */
const commentReducer = (
	state: CommentState = initialState,
	action: CommentAction
): CommentState => {
	switch (action.type) {
		case GET_COMMENTS:
			return { ...state };
		case GET_COMMENT:
			return { ...state };
		case CREATE_COMMENT:
			return { ...state };
		case UPDATE_COMMENT:
			return { ...state };
		case DELETE_COMMENT:
			return { ...state };
		default:
			return state;
	}
};

export default commentReducer;
