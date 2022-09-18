import React, { useState, useEffect } from 'react';
import CommentListContainer from './containers/CommentListContainer';
import PageListContainer from './containers/PageListContainer';
import FormContainer from './containers/FormContainer';
import getCommentList from './api/getCommentList';

function App() {

  const [commentList, setCommentList] = useState([]);

  async function fetchComments() {
    const fetchedComments = await getCommentList();
    setCommentList(fetchedComments);
  }

  useEffect(() => {
    fetchComments();
  });

  return (
    <div>
      <CommentListContainer commentList={commentList}/>
      <PageListContainer />
      <FormContainer />
    </div>
  );
}

export default App;
