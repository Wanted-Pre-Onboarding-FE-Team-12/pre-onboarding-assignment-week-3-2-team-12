import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';
import { fetchComment, deleteComment } from '../redux/reducers/commentSlice';
import { updateListSlice } from '../redux/reducers/updateListSlice';

function CommentList() {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.commentSlice);
  const updateList = useSelector((state) => state.updateList);

  const limit = 5;
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  const numPages = Math.ceil(comments.length / limit);

  useEffect(() => {
    dispatch(fetchComment());
  }, [updateList.updated]);

  const onDeleteComment = (id) => {
    const deleteConfirm = window.confirm('삭제하시겠습니까?');

    if (deleteConfirm) {
      dispatch(deleteComment(id));
      dispatch(updateListSlice.actions.update());
      setPage(1);
    }
  };

  return (
    <>
      {comments?.slice(offset, offset + limit).map((comment, key) => (
        <Comment key={key}>
          <img src={comment.profile_url} alt="" />

          {comment.author}

          <CreatedAt>{comment.createdAt}</CreatedAt>

          <Content>{comment.content}</Content>

          <Button>
            <button>수정</button>
            <button
              onClick={() => {
                onDeleteComment(comment.id);
              }}
            >
              삭제
            </button>
          </Button>
          <hr />
        </Comment>
      ))}
      <PageListStyle>
        <Page onClick={() => setPage(page - 1)} disabled={page === 1}>
          &lt;
        </Page>
        {Array(numPages)
          .fill()
          .map((_, i) => (
            <Page
              key={i + 1}
              onClick={() => setPage(i + 1)}
              aria-current={page === i + 1 ? 'page' : null}
            >
              {i + 1}
            </Page>
          ))}
        <Page onClick={() => setPage(page + 1)} disabled={page === numPages}>
          &gt;
        </Page>
      </PageListStyle>
    </>
  );
}

export default CommentList;

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
  & > button {
    margin-right: 10px;
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    border: 1px solid lightgray;
    cursor: pointer;
  }
`;

const PageListStyle = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

const Page = styled.button`
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  ${({ active }) =>
    active &&
    `
        background: gray;
        color: #fff;
  `}
  margin-right: 3px;
`;
