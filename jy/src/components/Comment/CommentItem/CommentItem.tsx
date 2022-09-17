import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { deleteComment } from '_module/comment';

/**
 * 삭제
 * 	- 삭제 버튼을 클릭하면 alert으로 삭제할 것인지 묻고, 확인을 누를 경우, 서버로 삭제 요청을 보낸다.
 * 	- 삭제 요청 보내는 api 함수, 액션 객체, 리듀서 추가하기
 * 	- dispatch로 요청 보내기
 */
interface IProps {
	comment: IComment;
}

const CommentItem = ({ comment: { profile_url, author, createdAt, content, id } }: IProps) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	/** comment delete */
	const handleDeleteComment = async () => {
		try {
			dispatch(await deleteComment(id));
		} catch (error) {
			alert(error);
		} finally {
			navigate('/');
		}
	};

	return (
		<CommentContainer>
			<img src={profile_url} alt="profile img" />
			<span>{author}</span>
			<CreatedAt>{createdAt}</CreatedAt>
			<Content>{content}</Content>
			<Button>
				<UpdateButton>수정</UpdateButton>
				<DeleteButton onClick={handleDeleteComment}>삭제</DeleteButton>
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

// 버튼 외 모든 css 수정 하기
const Button = styled.div`
	text-align: right;
	margin: 10px 0;

	& > button {
		margin-right: 10px;
		padding: 0.375rem 0.75rem;
		border-radius: 0.25rem;
		border: 1px solid lightgray;
		cursor: pointer;
	}
`;

const UpdateButton = styled.button`
	color: skyblue;
`;

const DeleteButton = styled.button`
	color: red;
`;
