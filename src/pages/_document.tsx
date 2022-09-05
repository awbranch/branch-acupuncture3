import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta
            name="description"
            content="Whatever your health goals may be, East Asian Medicine can help you achieve them. At Branch Acupuncture Center, we offer the wisdom of East Asian Medicine to help restore balance to your whole being. Molly Branch, owner, and licensed acupuncturist, provides natural healing modalities in a calm space to support mental and emotional health and well-being, pain management, preventative medicine, and oncology support."
          />
          <meta name="robots" content="" />
          <meta property="og:image" content="" />
          <meta property="og:url" content="http://mollybranch.com/" />
          <meta property="og:title" content="Branch Acupuncture Center" />
          <meta
            property="og:description"
            content="Whatever your health goals may be, East Asian Medicine can help you achieve them. At Branch Acupuncture Center, we offer the wisdom of East Asian Medicine to help restore balance to your whole being. Molly Branch, owner, and licensed acupuncturist, provides natural healing modalities in a calm space to support mental and emotional health and well-being, pain management, preventative medicine, and oncology support."
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:wght@400;500;600;700&display=swap"
            rel="stylesheet"
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

export default MyDocument;
