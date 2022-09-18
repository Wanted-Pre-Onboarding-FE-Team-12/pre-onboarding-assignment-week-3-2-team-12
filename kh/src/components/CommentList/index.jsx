import React from 'react';

import CommentPreview from '@components/CommentPreview';

const CommentList = ({ comments }) => {
  return (
    <ul>
      {comments?.map((comment, idx) => (
        <CommentPreview key={idx} comment={comment} />
      ))}
    </ul>
  );
};

export default CommentList;
