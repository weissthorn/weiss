import 'styles/custom.scss';
import type { AppProps } from 'next/app';
import { GeistProvider, CssBaseline } from '@geist-ui/core';
import useAnalytics from 'components/Analytics';
import { parseCookies } from 'nookies';
import { weissLight, weissDark } from 'themes';

const App = ({ Component, pageProps }: AppProps) => {
  const cookie = parseCookies();
  const theme = cookie && cookie.theme ? cookie.theme : 'weiss-light';

  return (
    <GeistProvider themes={[weissLight, weissDark]} themeType={theme}>
      <CssBaseline />
      {useAnalytics()}
      <Component {...pageProps} />
    </GeistProvider>
  );
};

export default App;
