import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { makeDateFormat } from 'util/dataFormat';
import SelectOption from 'components/SelectOption/SelectOption';
import styled from 'styled-components';
import { createCommentApi, getCommentApi } from '_api/commentAPI';
import { RootState } from '_module';
import { updateComment } from '_module/comment';

/**
 * 글 작성 로직
 * 	1. 4개의 입력창에 모두 값이 입력되어야 한다.
 * 		- 각각 input 창에 대한 state를 두고, 값이 onChange 일어날 때 마다 값을 update 해 준다.
 * 	2. 4개의 값이 모두 다 입력 됐을 때 등록 버튼이 활성화 된다.
 * 		- 4개의 값에 대한 유효성 검사(값이 비어 있지 않은지)
 * 	3. 값을 담아서 서버로 요청을 보낸다.
 *
 * 글 수정 로직
 * 	1. 수정 모드이고, 1개의 코멘트가 있을 경우 컴포넌트 렌더링하는 부분 핸들링
 *	2. comment에 있는 값들을 value들에 넣어주기
 */
function Form(): JSX.Element {
	/** 글 수정모드인지 상태값 스토어에서 가져오기 */
	const { isUpdateMode, updateRequestCommentId } = useSelector(({ comment }: RootState) => comment);
	/** 1개의 comment state save */
	const [comment, setComment] = useState<IComment>({
		author: '',
		content: '',
		createdAt: '',
		id: 0,
		profile_url: '',
	});

	/** create */
	/** form values  */
	const [values, setInputs] = useState<IWriteCommentState>({
		profile_url: '',
		author: '',
		content: '',
		createdAt: makeDateFormat(),
	});

	const { profile_url, author, content } = values;

	/** value state update */
	const handleChangeValue = (
		e:
			| React.ChangeEvent<HTMLInputElement>
			| React.ChangeEvent<HTMLTextAreaElement>
			| React.ChangeEvent<HTMLSelectElement>
	) => {
		const { name, value } = e.target;
		if (isUpdateMode) {
			setComment({ ...comment, [name]: value });
		} else {
			setInputs({ ...values, [name]: value });
		}
	};

	/** state initialize */
	const handleResetState = () => {
		setInputs({ profile_url: '', author: '', content: '', createdAt: makeDateFormat() });
	};

	/** crate comment or update */
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			if (isUpdateMode) {
				const data = { ...comment };
				await updateComment(comment.id, data);
				handleResetState();
			} else {
				const data = { ...values };
				await createCommentApi(data);
				handleResetState();
			}
		} catch (error) {
			alert(error);
		} finally {
		}
	};

	/** update */
	/**  1개의 글 목록 가져오는 요청 보내고, state 업데이트 하기 */
	const handleGetComment = async () => {
		try {
			const result = await getCommentApi(updateRequestCommentId);
			setComment(result);
		} catch (error) {
			alert(error);
		}
	};

	useEffect(() => {
		if (isUpdateMode) {
			handleGetComment();
		}
	}, [isUpdateMode]);

	return (
		<WriteFormContainer>
			<form onSubmit={handleSubmit}>
				<SelectOption
					onChange={handleChangeValue}
					value={isUpdateMode ? comment.profile_url : profile_url}
				/>
				<input
					type="text"
					name="author"
					placeholder="작성자"
					required
					onChange={handleChangeValue}
					value={isUpdateMode ? comment.author : author}
				/>
				<textarea
					name="content"
					placeholder="내용"
					required
					onChange={handleChangeValue}
					value={isUpdateMode ? comment.content : content}
				></textarea>
				<input
					type="text"
					name="createdAt"
					placeholder={makeDateFormat()}
					disabled
					onChange={handleChangeValue}
				/>
				<button type="submit">등록</button>
			</form>
		</WriteFormContainer>
	);
}

export default Form;

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
