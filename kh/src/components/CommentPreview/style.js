import styled from 'styled-components';

export const Wrapper = styled.article`
  display: flex;
  align-items: flex-start;
  margin: 16px auto;
`;

export const Avatar = styled.div`
  margin-right: 2rem;
  display: none;

  img {
    border-radius: 6px;
    width: 50px;
    height: 50px;
  }
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    display: block;
  }
`;

export const Comment = styled.div`
  position: relative;
  flex-basis: 0;
  flex-grow: 1;
  background-color: #fff;
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  line-height: 1.8;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.6rem 1.2rem;
    background-color: #f6f8fa;
    border-bottom: 1px solid #e1e4e8;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    font-size: 1.6rem;
    color: #586069;

    .author {
      font-weight: 600;
      font-size: 1.8rem;
      margin-right: 1rem;
    }

    .date {
      margin-left: 1rem;
    }

    button {
      padding: 0.4rem 0.8rem;
      margin: 0 0.3rem;
      background: transparent;
      border: 1px solid #e1e4e8;
      border-radius: 3px;
      cursor: pointer;
      transition: all 0.25s;

      &:hover {
        background: #586069;
        color: #f6f8fa;
      }
    }
  }

  footer {
    padding: 2rem 1.2rem;
    font-size: 1.4rem;
  }

  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    &:before,
    &:after {
      content: ' ';
      border-color: #0000;
      border-style: solid solid outset;
      display: block;
      height: 0;
      left: -16px;
      pointer-events: none;
      position: absolute;
      right: 100%;
      top: 11px;
      width: 0;
    }
    &:before {
      border-right-color: #d1d5da;
      border-width: 8px;
    }
    &:after {
      border-right-color: #f6f8fa;
      border-width: 7px;
      margin-left: 2px;
      margin-top: 1px;
    }
  }
`;
