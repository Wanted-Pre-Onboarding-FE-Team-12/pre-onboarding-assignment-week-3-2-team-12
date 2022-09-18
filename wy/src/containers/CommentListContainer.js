import React from 'react';
import CommentList from '../components/CommentList';

function CommentListContainer({ commentList }) {
  return <CommentList commentList={commentList} />;
}

export default CommentListContainer;
