import React from 'react';
import styled from 'styled-components';
import { postComment } from '../api/postComment';

const FormStyle = styled.div`
  & > form {
    padding: 0 10px;
    margin-bottom: 50px;
  }
  & > form > textarea {
    padding: 5px 1%;
    width: 98%;
    height: 50px;
  }
  & > form > input[type='text'] {
    padding: 5px 1%;
    width: 98%;
    margin-bottom: 10px;
  }
  & > form > button {
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    border: 1px solid lightgray;
    cursor: pointer;
  }
`;

function Form() {
  const handleSubmit = async event => {
    event.preventDefault();
    // id값은 임시로 해당 코멘트 생성날짜,시간으로 설정했습니다.
    let newComment = { id: new Date().getTime() };
    for (const child of event.target.children) {
      if (child.nodeName !== 'BR' && child.nodeName !== 'BUTTON') {
        newComment[child.name] = child.value;
      }
    }
    await postComment(newComment);
  };

  return (
    <FormStyle>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="profile_url"
          placeholder="https://picsum.photos/id/1/50/50"
          required
        />
        <br />
        <input type="text" name="author" placeholder="작성자" />
        <br />
        <textarea name="content" placeholder="내용" required></textarea>
        <br />
        <input type="text" name="createdAt" placeholder="2020-05-30" required />
        <br />
        <button type="submit">등록</button>
      </form>
    </FormStyle>
  );
}

export default Form;
