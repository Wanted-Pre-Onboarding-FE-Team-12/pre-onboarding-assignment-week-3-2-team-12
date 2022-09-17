export const isCommentData = (data: any): data is Comment => {
	return 'author' in data && 'content' in data;
};
