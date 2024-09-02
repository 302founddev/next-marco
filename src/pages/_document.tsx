import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {

  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>

          {/* Google tag ( gtag.js ) ANALITYCS */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-CG53EWEGS8"></script>
          <script dangerouslySetInnerHTML={{
            __html: `
                // google analityc code
            `
          }} />

          {/* Google tag ( gtag.js ) ADWORDS */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=AW-340874452"></script>
          <script dangerouslySetInnerHTML={{
            __html: `
                // Google adwords
            `
          }} />

        </Head>
        <body>
          <Main />
          <NextScript />

          {/* Mouse flow tag */}
          <script dangerouslySetInnerHTML={{
            __html: `
                // Optional heat map
                // Flow tag
            `
          }} />

        </body>
      </Html>
    )
  }
}

export default MyDocument
