import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>MindMesh</title>
        <meta name="description" content="Your AI-powered MindMesh assistant" />
        <link rel="icon" type="image/png" href="/logo.png" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
