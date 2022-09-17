import React from 'react';
import PageList from '../components/PageList';

function PageListContainer({commentsPerPage, totalComments, pagenate}) {
  return <PageList 
          commentsPerPage={commentsPerPage} 
          totalComments={totalComments}
          pagenate={pagenate}
          />;
}

export default PageListContainer;
