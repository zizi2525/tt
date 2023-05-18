import { Html, Head, Main, NextScript } from 'next/document'
export default function Document() {
 
        return (
        <Html>
            <Head>
            <link rel="manifest" href="/manifest.json" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
            <meta name="theme-color" content="#ff0040" />
            </Head>
            <body>
            <Main />
            <NextScript />
         <script src="/script.js"></script> 
            </body>
        </Html>
        )
}
   





