import Document, { Html, Head, Main, NextScript } from 'next/document'

    class MyDocument extends Document {
      render() {
        return (
          <Html lang="en">
            <Head>
              <meta name="description" content="Your photography portfolio" />
            </Head>
            <body>
              <Main />
              <NextScript />
            </body>
          </Html>
        )
      }
    }

    export default MyDocument
