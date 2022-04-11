import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

@font-face {
	font-family: Righteous;
	src: url('/assets/fonts/Righteous-Regular.ttf');
}

a {
  color: inherit;
  text-decoration: none;
}

*,*::after,*::before{
  box-sizing: border-box;
}

::-webkit-scrollbar {
  width: 6px;
  }
  ::-webkit-scrollbar-track {
  border-left: 1px solid #000;
  }
  ::-webkit-scrollbar-thumb {
  background: #575757;
      box-shadow: inset 0 0 6px #333232;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #575757;
      box-shadow: inset 0 0 6px #333232;
  }
  ::-webkit-scrollbar-thumb:window-inactive {
    background: #575757;
  } 
`;

export default GlobalStyle;