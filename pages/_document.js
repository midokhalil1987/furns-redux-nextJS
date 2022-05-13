import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Open+Sans:wght@300;500;600&family=Raleway:ital,wght@0,300;0,600;0,700;1,300&display=swap"
            rel="stylesheet"
          />
          <link rel="preconnect" href="https://app.snipcart.com" />
          <link rel="preconnect" href="https://cdn.snipcart.com" />
          <link
            rel="stylesheet"
            href="https://cdn.snipcart.com/themes/v3.3.1/default/snipcart.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />{" "}
          <script
            async
            src="https://cdn.snipcart.com/themes/v3.3.1/default/snipcart.js"
          ></script>
          <div
            hidden
            id="snipcart"
            data-api-key="MmQyOTIwNGYtYmQwYS00OTQ2LWIwNDItZmZlYjM0ZjQxMzFmNjM3ODY4MzE1NDE2NjAzMDI4"
            data-config-modal-style="side"
          ></div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
