import { getCommentsApi } from './../_api/commentAPI';
/** Ducks pattern */
// import { isCommentData } from 'util/typeGuard';

/**
 * action type
 * as const: 액션 객체를 만들게 action.type의 값을 추론하는 과정에서 action.type이 string으로 추론되지 않고, 지정한 실제 문자열 값으로 추론 되도록 해주기 위해 처리
 * */
const GET_COMMENTS = 'comment/GET_COMMENTS' as const; // GET /comments

/**
 * action create function
 */
export const getComments = () => {
	return getCommentsApi().then((response) => ({
		type: GET_COMMENTS,
		payload: response,
	}));
};

/**
 * 모든 액션 객체들에 대한 타입 준비
 * ReturnType<typeof ____> : 특정 함수의 반환값을 추론
 */
/* type CommentAction =
	| ReturnType<typeof getComments>
	| ReturnType<typeof getComment>
	| ReturnType<typeof createComment>
	| ReturnType<typeof updateComment>
	| ReturnType<typeof deleteComment>; */

/**
 * 이 리덕스 모듈에서 관리 할 상태의 타입 선언
 */
interface ICommentState {
	comments: IComment[];
}

/**
 * 초기 상태
 */
const initialState: ICommentState = {
	comments: [],
};

/**
 * Reducer
 */
const commentReducer = (
	state: ICommentState = initialState,
	action: { type: string; payload: unknown }
): ICommentState => {
	switch (action.type) {
		case GET_COMMENTS: {
			const payload = action.payload as IComment[];
			return { ...state, comments: payload };
		}
		default:
			return state;
	}
};

export default commentReducer;
