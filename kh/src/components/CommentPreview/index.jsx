import React from 'react';

// CSS
import * as S from './style';

const CommentPreview = ({ comment }) => {
  const { author, profile_url, createdAt, content } = comment;

  return (
    <S.Wrapper>
      <S.Avatar>
        <img src={profile_url} alt="author" />
      </S.Avatar>
      <S.Comment>
        <header>
          <div className="comment-data">
            <span className="author">{author}</span>
            commented
            <span className="date">{createdAt}</span>
          </div>
          <div className="comment-actions">
            <button>수정</button>
            <button>삭제</button>
          </div>
        </header>
        <footer>{content}</footer>
      </S.Comment>
    </S.Wrapper>
  );
};

export default CommentPreview;
