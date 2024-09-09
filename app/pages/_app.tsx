// pages/_app.tsx

import { AppProps } from 'next/app';
import Script from 'next/script';
import Head from 'next/head';
import '../styles/globals.css'; // Your Tailwind CSS styles

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Your Website Title</title>
      </Head>

      {/* Load Google Analytics script */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-0KPC82XJP3"
      />

      {/* Initialize Google Analytics */}
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0KPC82XJP3');
          `,
        }}
      />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
