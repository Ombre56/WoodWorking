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

  /* Styles to Slider component */
.rec.rec-arrow {
    background-color: #EAEAEA;
    box-shadow: none;
}

.rec.rec-arrow:hover {
    background-color: #C4C4C4;
}

.rec.rec-dot_active{
  background-color: #6B6B6B;
  box-shadow: 0 0 1px 3px #6B6B6B;
}
`;

export default GlobalStyle;