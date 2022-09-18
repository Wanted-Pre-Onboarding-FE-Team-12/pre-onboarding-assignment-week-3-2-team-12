import React from 'react';

import CommentListContainer from './components/CommentList';
// import PageListContainer from './components/PageList';
import FormContainer from './components/Form';

function App() {
  return (
    <div>
      <CommentListContainer />
      {/* <PageListContainer /> */}
      <FormContainer />
    </div>
  );
}

export default App;
