import CommentList from 'pages/Comment/CommentList/CommentList';

interface IProps {
	initializationPage: () => void;
}

function CommentListContainer({ initializationPage }: IProps): JSX.Element {
	return <CommentList initializationPage={initializationPage} />;
}

export default CommentListContainer;
