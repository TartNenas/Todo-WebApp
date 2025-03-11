import { createGlobalStyle } from 'styled-components';
import { Theme } from './theme';

export const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${({ theme }) => theme.typography.fontFamily};
    background-color: #F3F3F3;
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    --pattern-color: #E1E1E1;
    background-image: 
      linear-gradient(180deg, rgba(243, 243, 243, 1) 0%, rgba(243, 243, 243, 0) 25%),
      linear-gradient(0deg, transparent 24%, var(--pattern-color) 25%, var(--pattern-color) 26%, transparent 27%, transparent 74%, var(--pattern-color) 75%, var(--pattern-color) 76%, transparent 77%, transparent),
      linear-gradient(90deg, transparent 24%, var(--pattern-color) 25%, var(--pattern-color) 26%, transparent 27%, transparent 74%, var(--pattern-color) 75%, var(--pattern-color) 76%, transparent 77%, transparent);
    background-size: 100% 100%, 55px 55px, 55px 55px;
    background-position: 0 0, 0 0, 0 0;
    background-repeat: no-repeat, repeat, repeat;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
    font-family: inherit;
  }

  input {
    font-family: inherit;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    html {
      font-size: 14px;
    }
  }
`; 