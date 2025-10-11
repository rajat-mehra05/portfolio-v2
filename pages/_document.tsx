import { Html, Head, Main, NextScript } from 'next/document';

export default function Document(props) {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="preload"
          href="/fonts/ibm-plex-sans-var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        <link
          href="/static/favicons/android-icon-192x192.jpg"
          rel="shortcut icon"
          type="image/jpeg"
        />
        <link href="/static/favicons/site.webmanifest" rel="manifest" />
        <link
          rel="preconnect"
          href="https://cdn.usefathom.com"
          crossOrigin=""
        />

        <link
          href="/static/favicons/android-icon-192x192.jpg"
          rel="apple-touch-icon"
          sizes="192x192"
          type="image/jpeg"
        />
        <link
          href="/static/favicons/android-icon-36x36.jpg"
          rel="icon"
          sizes="36x36"
          type="image/jpeg"
        />
        <link
          href="/static/favicons/android-icon-72x72.jpg"
          rel="icon"
          sizes="72x72"
          type="image/jpeg"
        />
        <link
          href="/static/favicons/android-icon-512x512.jpg"
          rel="icon"
          sizes="512x512"
          type="image/jpeg"
        />
        <link
          color="#da532c"
          href="/static/favicons/android-icon-512x512.jpg"
          rel="mask-icon"
        />
        <meta content="#ffffff" name="theme-color" />
        <meta content="#ffffff" name="msapplication-TileColor" />
        <meta
          content="/static/favicons/browserconfig.xml"
          name="msapplication-config"
        />
        <meta content="14d2e73487fa6c71" name="yandex-verification" />
        <meta
          content="eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw"
          name="google-site-verification"
        />
      </Head>
      <body className="bg-white dark:bg-black text-black dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
