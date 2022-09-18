import React from 'react';

// CSS
import * as S from './style';

const Pagination = ({ currentPage, commentsPerPage, totalComments, paginate }) => {
  const pageNumbers = [...Array(Math.ceil(totalComments / commentsPerPage)).keys()].map(e => e + 1);

  return (
    <S.PaginationWrapper>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <PaginationItem
            key={number}
            number={number}
            currentPage={currentPage}
            paginate={paginate}
          />
        ))}
      </ul>
    </S.PaginationWrapper>
  );
};

const PaginationItem = ({ number, currentPage, paginate }) => {
  return (
    <S.PaginationItem
      className={currentPage === number ? 'active' : ''}
      onClick={() => paginate(number)}
    >
      {number}
    </S.PaginationItem>
  );
};

export default Pagination;
