import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle` 
  *,
  ::after,
  ::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-family: sans-serif;
    font-size: 62.5%;
  }

  body {
    --bgColor: ${props => props.theme.colors.primary7};
    --textColor: ${props => props.theme.colors.primary2};
    --contentBgColor: ${props => props.theme.colors.primary9};
    --contentTextColor: ${props => props.theme.colors.primary3};
    --headingColor: ${props => props.theme.colors.primary2};
    --linkColor: ${props => props.theme.colors.primary5};
    --categoryBordewrColor: ${props => props.theme.colors.primary5};
    background: var(--bgColor);
    font-family: "Noto Sans KR";
    color: var(--textColor);
    margin: 0;
  }

  article,
  footer,
  header,
  main,
  nav {
    display: block;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: .2s;
    :focus{
      outline: none;
    }
  }
  a:active,
  a:hover {
    outline: 0;
  }

  ul{
    list-style:none;
  }
`;
