import React from 'react';
import styled from 'styled-components';

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

function PageList({ commentsPerPage, totalComments, pagenate }) {
  const pageArray = [];

  for (let number = 1; number <= Math.ceil(totalComments / commentsPerPage); number++) {
    pageArray.push(
      <Page key={number}>
        <a onClick={() => pagenate(number)} href="#" className="page-link">
          {number}
        </a>
      </Page>,
    );
  }

  return <PageListStyle>{pageArray}</PageListStyle>;
}

export default PageList;
