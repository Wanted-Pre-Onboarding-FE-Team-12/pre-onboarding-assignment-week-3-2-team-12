import styled from 'styled-components';

interface IProps {
	comment: IComment;
}

const CommentItem = ({ comment: { profile_url, author, createdAt, content } }: IProps) => {
	return (
		<CommentContainer>
			<img src={profile_url} alt="profile img" />
			<span>{author}</span>
			<CreatedAt>{createdAt}</CreatedAt>
			<Content>{content}</Content>
			<Button>
				<a>수정</a>
				<a>삭제</a>
			</Button>
		</CommentContainer>
	);
};

export default CommentItem;

/** style */
const CommentContainer = styled.div`
	background-color: #efebe9;
	padding: 7px 10px;
	text-align: left;
	border-radius: 10px;
	padding: 1.5rem 1rem;
	margin-bottom: 1.5rem;
	box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

	& > img {
		vertical-align: middle;
		margin-right: 10px;
		border-radius: 50%;
		width: 50px;
		height: 50px;
	}
`;

const CreatedAt = styled.div`
	float: right;
	vertical-align: middle;
`;

const Content = styled.div`
	margin: 10px 0;
`;

const Button = styled.div`
	text-align: right;
	margin: 10px 0;
	& > a {
		margin-right: 10px;
		padding: 0.375rem 0.75rem;
		border-radius: 0.25rem;
		border: 1px solid lightgray;
		cursor: pointer;
	}
`;
