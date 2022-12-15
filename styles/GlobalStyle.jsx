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

@font-face {
	font-family: Roboto;
	src: url('/assets/fonts/Roboto-Regular.ttf');
}

a {
  color: inherit;
  text-decoration: none;
}

ul{
  list-style: none;
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

.rec.rec-arrow-left{
  margin-left: 3rem;
    @media screen and (max-width: 800px){
            margin-left: .625rem;
    }
}

.rec.rec-arrow-right {
  margin-right: 3rem;
    @media screen and (max-width: 800px){
            margin-right: .625rem;
    }
}

.rec.rec-dot_active{
  background-color: #6B6B6B;
  box-shadow: 0 0 1px 3px #6B6B6B;
}

  /* Styles to Slider component */

  /* Styles to Navigation component */

nav{
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 18.75rem;
  z-index: 100;
  box-shadow: 21px 2px 48px -1px rgba(0, 0, 0, 0.0.9);
  background-color: red;
}

.inner-nav{
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #ffffff;
}

button.toggle{
  background-color: #ffffff;
  z-index: 101;
  position: fixed;
  outline: 0;
  border: none;
  top: 18px;
  left: 15px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

  /* Styles to Navigation component */
`;

export default GlobalStyle;