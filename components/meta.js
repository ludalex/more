import Head from 'next/head'

export default () => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <style jsx global>{`
      * { box-sizing: border-box; margin: 0; padding: 0 }
      body { 
        background: #000;
        font: 11px menlo;
        color: #fff;
      }
      html,
      body,
      body > div:first-child,
      div#__next {
        height: 100%;
      }
    `}</style>
  </>
)