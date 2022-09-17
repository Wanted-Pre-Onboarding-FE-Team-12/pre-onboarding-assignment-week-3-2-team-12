import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { makeDateFormat } from 'util/dataFormat';
import SelectOption from 'components/SelectOption/SelectOption';
import styled from 'styled-components';
import { createCommentApi } from '_api/commentAPI';

/**
 * 글 작성 로직
 *
 * 1. 4개의 입력창에 모두 값이 입력되어야 한다.
 * 	- 각각 input 창에 대한 state를 두고, 값이 onChange 일어날 때 마다 값을 update 해 준다.
 * 2. 4개의 값이 모두 다 입력 됐을 때 등록 버튼이 활성화 된다.
 * 	- 4개의 값에 대한 유효성 검사(값이 비어 있지 않은지)
 * 3. 값을 담아서 서버로 요청을 보낸다.
 */
function Form(): JSX.Element {
	const navigate = useNavigate();
	const [values, setInputs] = useState<IWriteCommentState>({
		profile_url: '',
		author: '',
		content: '',
		createdAt: makeDateFormat(),
	});

	const { profile_url, author, content } = values;

	const handleChangeValue = (
		e:
			| React.ChangeEvent<HTMLInputElement>
			| React.ChangeEvent<HTMLTextAreaElement>
			| React.ChangeEvent<HTMLSelectElement>
	) => {
		const { name, value } = e.target;
		setInputs({ ...values, [name]: value });
	};

	// state initialize
	const handleResetState = () => {
		setInputs({ profile_url: '', author: '', content: '', createdAt: makeDateFormat() });
	};

	// 서버로 글 추가 요청 보내는 함수
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const data = { ...values };
		try {
			await createCommentApi(data);
		} catch (error) {
			console.log(error);
		} finally {
			handleResetState();
			navigate('/');
		}
	};

	return (
		<WriteFormContainer>
			<form onSubmit={handleSubmit}>
				<SelectOption onChange={handleChangeValue} value={profile_url} />
				<input
					type="text"
					name="author"
					placeholder="작성자"
					required
					onChange={handleChangeValue}
					value={author}
				/>
				<textarea
					name="content"
					placeholder="내용"
					required
					onChange={handleChangeValue}
					value={content}
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
