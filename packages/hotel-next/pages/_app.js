import 'react-image-gallery/styles/css/image-gallery.css';
import 'react-dates/lib/css/_datepicker.css';
import 'react-multi-carousel/lib/styles.css';
import '@glidejs/glide/dist/css/glide.core.min.css';
import 'antd/lib/date-picker/style/index.css';
import { ThemeProvider } from 'styled-components';
import theme from 'themes/default.theme';
import GlobalStyles from 'themes/global.style';
import Layout from 'container/Layout/Layout';
import AuthProvider from 'context/AuthProvider';
import { SearchProvider } from 'context/SearchProvider';
import 'antd/dist/antd.css';

function App({ Component, router, pageProps }) {
  const { query } = router;

  return (
    <AuthProvider>
      <SearchProvider query={query}>
        <ThemeProvider theme={theme}>
          <Layout>
            <GlobalStyles />
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </SearchProvider>
    </AuthProvider>
  );
}

export default App;
