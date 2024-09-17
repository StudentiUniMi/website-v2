import { Html, Head, Main, NextScript } from "next/document";
import clsx from "clsx";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

const Document = () => {
  return (
    <Html translate="no">
      <Head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          `${GeistSans.variable} ${GeistMono.variable}`,
        )}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
