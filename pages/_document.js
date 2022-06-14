import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  
    return (
    <Html>
      <Head>
        <link rel="shortcut icon" href="https://cdn-icons-png.flaticon.com/512/184/184517.png" type="image/png"/>
      </Head>
      <body className='my-body-class'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}