import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteComment, isUpdateModeValue } from '_module/comment';
import { RootState } from '_module';
import styled from 'styled-components';
interface IProps {
	comment: IComment;
	initializationPage: () => void;
}

const CommentItem = ({ comment, initializationPage }: IProps) => {
	const dispatch = useDispatch();
	const { isUpdateMode } = useSelector(({ comment }: RootState) => comment);
	const { profile_url, author, createdAt, content, id } = comment;
	const updateRequestCommentId = id;

	/** comment update mode state */
	const [isUpdate, setIsUpdate] = useState(false);

	const handleIsUpdate = () => {
		const targetValue = !isUpdate;
		setIsUpdate(targetValue);
		handleUpdateForm(targetValue);
	};

	/** update 상태값 변경 함수 */
	const handleUpdateForm = (targetValue: boolean) => {
		dispatch(isUpdateModeValue(targetValue, updateRequestCommentId));
	};

	/** comment delete */
	const handleDeleteComment = async () => {
		const answer = alert('글을 삭제하시겠습니까?');
		try {
			if (answer !== null) {
				dispatch(await deleteComment(id));
				/** init current page */
				initializationPage();
			}
		} catch (error) {
			alert(error);
		} finally {
		}
	};

	return (
		<CommentContainer>
			<img src={profile_url} alt="profile img" />
			<span> {author}</span>
			<CreatedAt>{createdAt}</CreatedAt>
			<Content>{content}</Content>
			<Button>
				<UpdateButton onClick={handleIsUpdate}>
					{isUpdate && isUpdateMode && id === updateRequestCommentId ? '취소' : '수정'}
				</UpdateButton>
				<DeleteButton onClick={handleDeleteComment}>삭제</DeleteButton>
			</Button>
		</CommentContainer>
	);
};

export default CommentItem;

const CommentContainer = styled.div`
	background-color: #efebe9;
	padding: 7px 10px;
	text-align: left;
	border-radius: 10px;
	padding: 1.5rem;
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
	margin-top: 1rem;
`;

const Button = styled.div`
	text-align: right;
	margin-top: 10px;

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
