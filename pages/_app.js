// import '../styles/globals.css'
import GlobalStyle from '../styles/GlobalsStyle'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
  
}

export default MyApp
