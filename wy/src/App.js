import React, { useState, useEffect } from 'react';
import CommentListContainer from './containers/CommentListContainer';
import PageListContainer from './containers/PageListContainer';
import FormContainer from './containers/FormContainer';
import getCommentList from './api/getCommentList';
import {useDispatch, useSelector} from 'react-redux';
import { setCommentList } from './redux/reducers/rootReducer';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [commentsPerPage] = useState(5);

  const dispatch = useDispatch();

  async function fetchComments() {
    const fetchedComments = await getCommentList();
    dispatch(setCommentList(fetchedComments));
  }

  useEffect(() => {
    fetchComments();
  }, []);

  const {commentList, isLoading} = useSelector(state => {return state})
  if(isLoading){
    return
  }

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
