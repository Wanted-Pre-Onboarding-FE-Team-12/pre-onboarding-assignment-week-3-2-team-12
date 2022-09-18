import { useSelector } from 'react-redux';
import { RootState } from '_module';
import CommentItem from '../CommentItem/CommentItem';
import styled from 'styled-components';

interface IProps {
	initializationPage: () => void;
}

function CommentList({ initializationPage }: IProps): JSX.Element {
	const comments = useSelector(({ comment }: RootState) => comment.comments);

	return (
		<CommentListContainer>
			{comments?.map((comment: IComment) => (
				<CommentItem key={comment.id} comment={comment} initializationPage={initializationPage} />
			))}
		</CommentListContainer>
	);
}

export default CommentList;

const CommentListContainer = styled.div`
	margin: 2rem;
`;
