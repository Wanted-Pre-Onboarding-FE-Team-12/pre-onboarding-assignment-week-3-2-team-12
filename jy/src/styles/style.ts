import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalResetStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  input, select: {
    outline: none;
  }
  input:focus, textarea:focus, select:focus {
    outline: none;
  }
`;
