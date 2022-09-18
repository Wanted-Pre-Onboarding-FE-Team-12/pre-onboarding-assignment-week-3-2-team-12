import { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

function PageList() {
  const pageArray = [];

  const comments = useSelector((state) => state.commentSlice);

  const limit = 5;
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  const numPages = Math.ceil(comments.length / limit);

  pageArray.push(
    // 임시로 페이지 하나만 설정했습니다.
    <Page key="1">1</Page>
  );

  // return <PageListStyle>{pageArray}</PageListStyle>;
  return (
    <>
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        &lt;
      </button>
      {Array(numPages)
        .fill()
        .map((_, i) => (
          <button
            key={i + 1}
            onClick={() => setPage(i + 1)}
            aria-current={page === i + 1 ? 'page' : null}
          >
            {i + 1}
          </button>
        ))}
      <button onClick={() => setPage(page + 1)} disabled={page === numPages}>
        &gt;
      </button>
    </>
  );
}

export default PageList;

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
