export const isCommentData = (data: any): data is IComment => {
	return 'author' in data && 'content' in data;
};
