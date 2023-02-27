import Layout from '@/page-components/layouts/layout'
import '../styles/globals.css'
import "../node_modules/slick-carousel/slick/slick.css"; 
import "../node_modules/slick-carousel/slick/slick-theme.css";
import { DataProvider } from '@/store/GlobalState'
import { SessionProvider } from "next-auth/react";
import { Container } from '@mui/material';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <DataProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </DataProvider>
    </SessionProvider>
  )
}

export default MyApp
