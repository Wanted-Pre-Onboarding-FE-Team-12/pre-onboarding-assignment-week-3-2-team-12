import { getCommentsApi, deleteCommentApi, updateCommentApi } from './../_api/commentAPI';
/** Ducks pattern */
// import { isCommentData } from 'util/typeGuard';

/**
 * action type
 * as const: 액션 객체를 만들게 action.type의 값을 추론하는 과정에서 action.type이 string으로 추론되지 않고, 지정한 실제 문자열 값으로 추론 되도록 해주기 위해 처리
 * */
const GET_COMMENTS = 'comment/GET_COMMENTS' as const; // GET /comments
const DELETE_COMMENT = 'comment/DELETE_COMMENT' as const; // DELETE /comments/{commentId}
// 수정모드인지 상태 값
const IS_UPDATE_MODE = 'IS_UPDATE_MODE' as const;
const UPDATE_COMMENT = 'comment/UPDATE_COMMENT' as const; // PUT /comments/{commentId}

/**
 * action create function
 */
export const getComments = () => {
	return getCommentsApi().then((response) => ({
		type: GET_COMMENTS,
		payload: response,
	}));
};

export const deleteComment = (id: number) => {
	return deleteCommentApi(id).then(() => ({
		type: DELETE_COMMENT,
		payload: id,
	}));
};

export const isUpdateMode = (isUpdateMode: boolean, updateRequestCommentId: number) => {
	return {
		type: IS_UPDATE_MODE,
		payload: { isUpdateMode, updateRequestCommentId },
	};
};

export const updateComment = (id: number, data: IComment) => {
	return updateCommentApi(id, data).then((response: IComment) => ({
		type: UPDATE_COMMENT,
		payload: response,
	}));
};

/**
 * 이 리덕스 모듈에서 관리 할 상태의 타입 선언
 */
interface ICommentState {
	comments: IComment[];
	isUpdateMode: boolean;
	updateRequestCommentId: number;
}

/**
 * 초기 상태
 */
const initialState: ICommentState = {
	comments: [],
	isUpdateMode: false,
	updateRequestCommentId: 0,
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
		case DELETE_COMMENT:
			const deleteCommentId = action.payload as number;
			const newComments = [...state.comments].filter((comment) => comment.id !== deleteCommentId);
			return { ...state, comments: newComments };
		case IS_UPDATE_MODE:
			/* const { isUpdateMode, updateRequestCommentId } = action.payload as {
				isUpdateMode: boolean;
				updateRequestCommentId: number;
			}; */
			const { isUpdateMode, updateRequestCommentId } = action.payload as ICommentState;
			return {
				...state,
				isUpdateMode,
				updateRequestCommentId,
			};
		case UPDATE_COMMENT:
			const updatedComment = action.payload as IComment;
			const id = updatedComment.id as number;
			const findIndex = state.comments.findIndex((comment) => comment.id === id);
			const copyComments = [...state.comments];
			copyComments[findIndex] = updatedComment;

			return {
				...state,
				comments: copyComments,
			};
		default:
			return state;
	}
};

export default commentReducer;
