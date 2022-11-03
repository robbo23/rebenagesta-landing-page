// noinspection HtmlRequiredTitleElement

// import { Partytown } from '@builder.io/partytown/react';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
  render() {
    const { isDevelopment } = this.props;

    return (
      <Html lang="pl">
        <Head>
          {/**
           <Partytown
           //debug={true}
           forward={['dataLayer.push', 'fbq']}
           resolveUrl={function (url, location, type) {
              if (type === 'script') {
                const proxyUrl = new URL('https://cdn.builder.codes/api/v1/js-proxy');
                proxyUrl.searchParams.append('url', url.href);
                proxyUrl.searchParams.append(
                  'apiKey',
                  process.env.NEXT_PUBLIC_PARTYTOWN_API_KEY
                );
                return proxyUrl;
              }

              return url;
            }}
           />
           */}

          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.defer=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}');
                `
            }}
          />
        </Head>
        <body className={isDevelopment ? 'debug-screens' : null}>
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
