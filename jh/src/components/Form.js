import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postComment } from '../redux/reducers/commentSlice';
import { updateListSlice } from '../redux/reducers/updateListSlice';

import styled from 'styled-components';

function Form() {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.commentSlice);
  const [profileURL, setProfileURL] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [createdAt, setCreatedAt] = useState('');

  const onPostComment = (e) => {
    const userID = comments[comments.length - 1].id + 1;
    e.preventDefault();
    const newComment = {
      profile_url: profileURL || `https://picsum.photos/id/${userID}/50/50`,
      author: author || `abc_${userID}`,
      content: content,
      createdAt: createdAt || new Date().toLocaleDateString(),
    };
    dispatch(postComment(newComment));
    dispatch(updateListSlice.actions.update());
    setProfileURL('');
    setAuthor('');
    setContent('');
    setContent('');
  };

  return (
    <FormStyle>
      <form onSubmit={onPostComment}>
        <input
          type="text"
          name="profile_url"
          placeholder="https://picsum.photos/id/1/50/50"
          value={profileURL}
          onChange={(e) => setProfileURL(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="author"
          placeholder="작성자"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <br />
        <textarea
          name="content"
          placeholder="내용"
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <br />
        <input
          type="text"
          name="createdAt"
          placeholder="2020-05-30"
          value={createdAt}
          onChange={(e) => setCreatedAt(e.target.value)}
        />
        <br />
        <button type="submit">등록</button>
      </form>
    </FormStyle>
  );
}

export default Form;

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
