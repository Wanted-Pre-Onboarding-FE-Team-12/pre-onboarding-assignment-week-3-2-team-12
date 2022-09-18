import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeDateFormat } from 'util/dataFormat';
import SelectOption from 'pages/SelectOption/SelectOption';
import styled from 'styled-components';
import { createCommentApi, getCommentApi } from '_api/commentAPI';
import { RootState } from '_module';
import { updateComment } from '_module/comment';

interface IProps {
	initializationPage: () => void;
}

function Form({ initializationPage }: IProps): JSX.Element {
	const dispatch = useDispatch();
	const { isUpdateMode, updateRequestCommentId } = useSelector(({ comment }: RootState) => comment);
	/** comment update form state  */
	const [comment, setComment] = useState<IComment>({
		author: '',
		content: '',
		createdAt: '',
		id: 0,
		profile_url: '',
	});

	/** comment create form state */
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
		if (isUpdateMode) {
			setComment({
				author: '',
				content: '',
				createdAt: '',
				id: 0,
				profile_url: '',
			});
		} else {
			setInputs({ profile_url: '', author: '', content: '', createdAt: makeDateFormat() });
		}
	};

	/** crate comment or update */
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			if (isUpdateMode) {
				const data = { ...comment };
				await dispatch(await updateComment(comment.id, data));
			} else {
				const data = { ...values };
				await createCommentApi(data);
				initializationPage();
			}
		} catch (error) {
			alert(error);
		} finally {
			handleResetState();
		}
	};

	/** update일 때 해당 글 정보 가져오는 함수 */
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
				<SubmitButton type="submit">등록</SubmitButton>
			</form>
		</WriteFormContainer>
	);
}

export default Form;

const WriteFormContainer = styled.div`
	display: flex;
	width: 100%;
	background-color: #ede7f6;
	padding: 3rem 0;

	& > form {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
	}

	& > {
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

const SubmitButton = styled.button`
	padding: 1rem 1.5rem;
	margin-top: 2rem;
	background-color: #debfe8;
	border: none;
	border-radius: 10px;
	cursor: pointer;
	font-size: 1rem;
	font-weight: bold;
	:hover {
		color: #fff;
		background-color: #4a0072;
	}
`;
