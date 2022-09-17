import axios, { AxiosResponse } from 'axios';
import { Comment } from 'types/types';

const BASE_URL = process.env.REACT_APP_SERVER_API;

/** get comments */
export const getCommentsApi = () => {
	return axios
		.get<Comment[]>(`${BASE_URL}comments`)
		.then((response: AxiosResponse<Comment[]>) => response.data);
};

/** get comment */

/** create comment */

/** update comment */

/** delete comment */
