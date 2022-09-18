import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import CommentList from '../components/CommentList';
import { getComment } from '../redux/actions/comment';

function CommentListContainer() {
  const dispatch = useDispatch();

  const { data: comments, loading } = useSelector(
    state => ({
      data: state.comment.data,
      loading: state.comment.loading,
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(getComment());
  }, []);
  return loading ? 'loading...' : <CommentList data={comments} />;
}

export default CommentListContainer;
