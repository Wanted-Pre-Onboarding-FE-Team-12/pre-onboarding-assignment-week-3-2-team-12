import { useSelector } from 'react-redux';
import { RootState } from '_module';
import CommentItem from '../CommentItem/CommentItem';

interface IProps {
	initializationPage: () => void;
}

function CommentList({ initializationPage }: IProps): JSX.Element {
	const comments = useSelector(({ comment }: RootState) => comment.comments);

	return (
		<>
			{comments?.map((comment: IComment) => (
				<CommentItem key={comment.id} comment={comment} initializationPage={initializationPage} />
			))}
		</>
	);
}

export default CommentList;
