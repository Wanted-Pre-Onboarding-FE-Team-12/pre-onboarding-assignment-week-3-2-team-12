import axios, { AxiosResponse } from 'axios';

const BASE_URL = process.env.REACT_APP_SERVER_API;

/** get comments */
export const getCommentsApi = (): Promise<IComment[]> => {
	return axios
		.get<IComment[]>(`${BASE_URL}/comments`)
		.then((response: AxiosResponse<IComment[]>) => response.data);
};

/** get comment */

/** create comment */
export const createCommentApi = (data: IWriteCommentState) => {
	return axios
		.post<IWriteCommentState>(`${BASE_URL}/comments`, data)
		.then((response: AxiosResponse) => response.data);
};

/** update comment */

/** delete comment */
export const deleteCommentApi = (id: number) => {
	return axios.delete(`${BASE_URL}/comments/${id}`).then((response: AxiosResponse) => response);
};
