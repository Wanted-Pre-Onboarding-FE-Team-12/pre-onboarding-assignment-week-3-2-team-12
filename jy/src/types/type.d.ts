interface IComment {
	id: number;
	profile_url: string;
	author: string;
	content: string;
	createdAt: string;
}

interface IWriteCommentState {
	profile_url: string;
	author: string;
	content: string;
	createdAt: string;
}
interface IPageRequest {
	page: number;
	limitComments: number;
	orderType: string;
	sortType: string | number;
}
