import GlobalStyle from '../styles/GlobalStyle'
import { QueryClientProvider, QueryClient } from 'react-query';
import { store } from '../redux/store';
import { Provider } from 'react-redux';
import { SessionProvider } from 'next-auth/react';

// create a client
const queryClient = new QueryClient();

export default function MyApp({
    Component,
    pageProps: { session, ...pageProps },
  }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <SessionProvider session={session}>
          <GlobalStyle />
          <Component {...pageProps} />
        </SessionProvider>
      </Provider>
    </QueryClientProvider>
  );
};