import { useEffect } from 'react';
import styled from 'styled-components';

interface IProps {
	updateRequestCommentId: number;
}

const UpdateForm = ({ updateRequestCommentId }: IProps) => {
	/** 1개의 comment state */

	// useEffect에서 1개의 글 가져오는 요청 날리고, state 업데이트 하기
	useEffect(() => {
		console.log('글 가져오기!');
	}, []);

	return (
		<WriteFormContainer>
			<form>
				<input type="text" name="author" required />
				<textarea name="content" required></textarea>
				<input type="text" name="createdAt" disabled />
				<button type="submit">등록</button>
			</form>
		</WriteFormContainer>
	);
};

export default UpdateForm;

/** style */
const WriteFormContainer = styled.div`
	display: flex;
	width: 100%;
	background-color: pink;
	padding: 3rem 0;

	& > form {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
	}

	& > {
		background-color: yellow;
		width: 470px;
	}

	& > form > input,
	textarea,
	select {
		width: 470px;
		height: 2rem;
		padding: 0.3rem 0.5rem;
		border: none;
		border-radius: 3px;
		box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
		margin-bottom: 1rem;
	}

	& > form > textarea {
		height: 4rem;
		resize: none;
	}
`;
