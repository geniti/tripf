import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html>
        <Head>
          <meta name="theme-color" content="#008489" />
          <meta name="description" content="React Hotel Listing Template" />
          <meta name="keywords" content="React, React js, Next, Next js" />
          <link
            rel="icon"
            href="/images/favicon.png"
            type="image/png"
            sizes="16x16"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Lato:400,400i,600,600i,700,700i&display=swap"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
