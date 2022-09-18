import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  width: 100%;
  .pagination {
    display: flex;
    justify-content: center;
    width: 80%;
    margin: 0 auto;
  }
`;

export const PaginationItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border: 1px solid #e1e4e8;
  margin: 0 0.3rem;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    border-color: ${props => props.theme.colors.darkGreen};
    background: ${props => props.theme.colors.lightGreen};
  }

  &.active {
    background: ${props => props.theme.colors.lightGreen};
  }
`;
