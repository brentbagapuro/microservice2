import Head from 'next/head'
import Layout from '@/components/Layout'
import { SessionProvider } from 'next-auth/react'
import 'styles/globals.css'

function MyApp({ Component, pageProps }) {
  const { session } = pageProps

  return (
    <>
      <Head>
        <title>Microservice 2</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SessionProvider session={session} refetchInterval={5 * 60}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </>
  )
}

export default MyApp
