import { useRef, useState } from 'react';

export const usePaginate = comments => {
  const [currentPage, setCurrentPage] = useState(1);
  const commentsPerPage = useRef(5);

  const indexOfLastPost = currentPage * commentsPerPage;
  const indexOfFirstPost = indexOfLastPost - commentsPerPage;
  const currentComments = comments.slice(indexOfFirstPost, indexOfLastPost);

  const handlePage = pageNumber => setCurrentPage(pageNumber);

  return { currentPage, currentComments, commentsPerPage, handlePage };
};
