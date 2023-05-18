import "../styles/globals.css";
import 'swiper/css';
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Layout from "@/components/Layout";
import NextNprogress from "nextjs-progressbar";
import { DefaultSeo } from "next-seo";
import {ThemeProvider} from 'next-themes'
import { useRouter } from "next/router";
function MyApp({ Component, pageProps }) {
  const router = useRouter();
 
   const canonicalUrl = (`https://toonanime.org` + (router.asPath === "/" ? "": router.asPath) +(router.query.page ? "?page="+router.query.page : ""));
  return (
    <>
  
      <ThemeProvider enableSystem={true} attribute="class" defaultTheme="dark">
      
      <DefaultSeo
        canonical={canonicalUrl}
       additionalMetaTags={[{
        name: 'google-site-verification',
        content: '1bmOaIYQL-_PhbyzimVTRreBe1V3fmPVrhXNgD-6E5w'
      }, 
    ]}

      />
      <NextNprogress  color="#ff0040"  />
      <Layout>
      <Component {...pageProps} />
      </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
