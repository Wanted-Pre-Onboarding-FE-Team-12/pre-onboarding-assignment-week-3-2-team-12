import axios, { AxiosResponse } from 'axios';

const BASE_URL = process.env.REACT_APP_SERVER_API;

/** get comments */
export const getCommentsApi = (): Promise<IComment[]> => {
	return axios
		.get<IComment[]>(`${BASE_URL}/comments`)
		.then((response: AxiosResponse<IComment[]>) => response.data);
};

/** get comment */
export const getCommentApi = (id: number): Promise<IComment> => {
	return axios.get<IComment>(`${BASE_URL}/comments/${id}`).then((response) => response.data);
};

/** create comment */
export const createCommentApi = (data: IWriteCommentState) => {
	return axios
		.post<IWriteCommentState>(`${BASE_URL}/comments`, data)
		.then((response: AxiosResponse) => response.data);
};

/** update comment */
export const updateCommentApi = (id: number, data: IComment) => {
	return axios
		.put<IComment>(`${BASE_URL}/comments/${id}`, data)
		.then((response: AxiosResponse) => response.data);
};

/** delete comment */
export const deleteCommentApi = (id: number) => {
	return axios
		.delete(`${BASE_URL}/comments/${id}`)
		.then((response: AxiosResponse) => response.data);
};

/**
 * page nation
 * /comments?_page=${pageNumber}&_limit=${limitNumber}&_order=${desc}&_sort=${id}
 * */
export const getPageNationCommentsApi = ({
	page,
	limitComments,
	orderType,
	sortType,
}: IPageRequest) => {
	return axios
		.get(
			`${BASE_URL}/comments?_page=${page}&_limit=${limitComments}&_order=${orderType}&_sort=${sortType}`
		)
		.then((response) => {
			const totalCount = Number(response.headers['x-total-count']);
			const responseData = [...response.data, totalCount];
			return responseData;
		});
};
