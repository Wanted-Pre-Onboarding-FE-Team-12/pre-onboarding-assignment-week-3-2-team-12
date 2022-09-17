import { useSelector } from 'react-redux';
import { RootState } from '_module';
import CommentItem from '../CommentItem/CommentItem';

function CommentList(): JSX.Element {
	// state에 있는 comments 가져와서 map으로 돌리기
	const comments = useSelector(({ comment }: RootState) => comment.comments);

	return (
		<div>
			{comments?.map((comment: IComment) => (
				<CommentItem key={comment.id} comment={comment} />
			))}
		</div>
	);
}

export default CommentList;
