import { useSelector } from 'react-redux';
import { RootState } from '_module';
import CommentItem from '../CommentItem/CommentItem';

function CommentList(): JSX.Element {
	const comments = useSelector(({ comment }: RootState) => comment.comments);

	return (
		<>
			{comments?.map((comment: IComment) => (
				<CommentItem key={comment.id} comment={comment} />
			))}
		</>
	);
}

export default CommentList;
