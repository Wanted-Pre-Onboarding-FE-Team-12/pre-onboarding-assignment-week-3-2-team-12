import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { deleteComment, isUpdateMode } from '_module/comment';
import styled from 'styled-components';

/**
 * 삭제
 * 	- 삭제 버튼을 클릭하면 alert으로 삭제할 것인지 묻고, 확인을 누를 경우, 서버로 삭제 요청을 보낸다.
 * 	- 삭제 요청 보내는 api 함수, 액션 객체, 리듀서 추가하기
 * 	- dispatch로 요청 보내기
 *
 * 수정
 *  - 수정인지 나타내는 상태값 1개 필요
 *  - 수정 버튼 클릭 시 입력 form에 작성한 글 내용들이 들어온다.
 *  - 수정 모드 일 때 등록 버튼은 사라지고, 수정 | 취소 버튼으로 보이게 처리
 *  - 수정 버튼 누르면 update 요청 보내기
 *  - 취소 버튼 누르면 입력 form 값들 지우고 등록 버튼으로 변경
 */
interface IProps {
	comment: IComment;
	initializationPage: () => void;
}

const CommentItem = ({ comment, initializationPage }: IProps) => {
	const { profile_url, author, createdAt, content, id } = comment;
	const dispatch = useDispatch();

	/** update 여부 상태값 */
	const [isUpdate, setIsUpdate] = useState(false);

	const handleIsUpdate = () => {
		const targetValue = !isUpdate;
		setIsUpdate(targetValue);
		handleUpdateForm(targetValue);
	};

	/** update 상태값 변경 함수 */
	const handleUpdateForm = (targetValue: boolean) => {
		const updateRequestCommentId = id;
		dispatch(isUpdateMode(targetValue, updateRequestCommentId));
	};

	/** comment delete */
	const handleDeleteComment = async () => {
		const answer = alert('글을 삭제하시겠습니까?');
		try {
			if (answer !== null) {
				dispatch(await deleteComment(id));
				/** init current page  */
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
			<span>{author}</span>
			<CreatedAt>{createdAt}</CreatedAt>
			<Content>{content}</Content>
			<Button>
				<UpdateButton onClick={handleIsUpdate}>{isUpdate ? '취소' : '수정'}</UpdateButton>
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
