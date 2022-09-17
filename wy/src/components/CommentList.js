import React from 'react';
import styled from 'styled-components';
import { deleteComment } from '../api/deleteComment';

const Comment = styled.div`
  padding: 7px 10px;
  text-align: left;

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

function CommentList({ commentList }) {
  const handleClick = event => {
    //let commentId = event.target.parentElement.parentElement.id;
    if (event.target.className === 'commentDeleteButton') {
      // id값 어떻게 할 지 정해지면 그 아이디값으로 수정 필요‼🛑
      deleteComment('commentId');
    } else {
      //modifyComment()
    }
  };
  return commentList.map((comment, key) => (
    <Comment key={key}>
      <img src={comment.profile_url} alt="" />

      {comment.author}

      <CreatedAt>{comment.createdAt}</CreatedAt>

      <Content>{comment.content}</Content>

      <Button onClick={handleClick}>
        <a className="commentModifyButton">수정</a>
        <a className="commentDeleteButton">삭제</a>
      </Button>

      <hr />
    </Comment>
  ));
}

export default CommentList;
