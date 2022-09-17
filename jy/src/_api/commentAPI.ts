import axios, { AxiosResponse } from 'axios';

const BASE_URL = process.env.REACT_APP_SERVER_API;

/** get comments */
export const getCommentsApi = () => {
	return axios
		.get<IComment[]>(`${BASE_URL}comments`)
		.then((response: AxiosResponse<IComment[]>) => response.data);
};

/** get comment */

/** create comment */

/** update comment */

/** delete comment */
