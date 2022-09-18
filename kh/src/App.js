import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { getComment } from '@redux/actions/comment';
import { usePaginate } from '@hooks/usePaginate';
import CommentForm from '@components/CommentForm';
import CommentList from '@components/CommentList';
import Pagination from '@components/Pagination';
import { Circles } from 'react-loader-spinner';

function App() {
  const dispatch = useDispatch();
  const { comments, isLoading } = useSelector(state => state.comment);
  const [currentPage, currentComments, commentsPerPage, paginate] = usePaginate(comments);

  useEffect(() => {
    dispatch(getComment());
  }, []);

  return (
    <Wrapper>
      <CommentList comments={currentComments} />
      <Circles
        height="150"
        width="150"
        color="hsl(135, 37%, 65%)"
        ariaLabel="circles-loading"
        wrapperClass="load-spinner"
        visible={isLoading}
      />
      <Pagination
        currentPage={currentPage}
        commentsPerPage={commentsPerPage}
        totalComments={comments.length}
        paginate={paginate}
      />
      <CommentForm />
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  margin: 10rem auto 0;
  padding: 0 ${({ theme }) => theme.sideSpace.large};
  .load-spinner {
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: ${({ theme }) => theme.responsive.large}) {
    max-width: 760px;
    margin-top: 2rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.responsive.small}) {
    padding: 0 ${({ theme }) => theme.sideSpace.small};
  }
`;
export default App;
