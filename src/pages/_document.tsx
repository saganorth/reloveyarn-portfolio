import { Html, Head, Main, NextScript } from "next/document";
import { Analytics } from "@vercel/analytics/react";
import React from "react";
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link href="https://fonts.googleapis.com/css2?family=Caveat&display=swap" rel="stylesheet"></link>
      <body>
        <Main />
        <NextScript />
        <Analytics />
      </body>
    </Html>
  );
}
