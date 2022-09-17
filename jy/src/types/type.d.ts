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
