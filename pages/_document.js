// noinspection HtmlRequiredTitleElement

import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    const { isDevelopment } = this.props;

    return (
      <Html lang="pl">
        <Head />
        <body className={isDevelopment ? 'debug-screens' : null}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
