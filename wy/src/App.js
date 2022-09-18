import React, { useState, useEffect } from 'react';
import CommentListContainer from './containers/CommentListContainer';
import PageListContainer from './containers/PageListContainer';
import FormContainer from './containers/FormContainer';
import getCommentList from './api/getCommentList';
//import {useDispatch} from 'react-redux';

function App() {
  const [commentList, setCommentList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [commentsPerPage] = useState(5);

  //const dispatch = useDispatch();

  async function fetchComments() {
    const fetchedComments = await getCommentList();
    setCommentList(fetchedComments);
  }

  useEffect(() => {
    fetchComments();
  }, []);

  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  const currentComments = commentList.slice(indexOfFirstComment, indexOfLastComment);

  const pagenate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      <CommentListContainer commentList={currentComments} />
      <PageListContainer
        commentsPerPage={commentsPerPage}
        totalComments={commentList.length}
        pagenate={pagenate}
      />
      <FormContainer />
    </div>
  );
}

export default App;
