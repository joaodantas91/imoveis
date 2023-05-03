import '../styles/global.scss';
import 'material-symbols/outlined.scss';
import { Poppins } from '@next/font/google';
import type { AppProps } from 'next/app';
import { Header } from '@/components/Header';
import { QueryClient, QueryClientProvider } from 'react-query';
import mainStyle from '@/styles/components/main.module.scss'
import { FloatingWhatsapp } from '@/components/FloatingWhatsapp';
import Head from 'next/head';
import { useRouter } from 'next/router';


const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] })

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()
  const router = useRouter();
  const isHomePage = router.pathname === '/';

  return (
    <>
      <Head>
        <title>Elisangela Brígida - Consultoria Imobiliária</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <div className={poppins.className}>
          <Header isHomePage={isHomePage} />
          <main className={`${mainStyle.main} ${isHomePage ? mainStyle.noPaddingTop : ''}`}>
            <Component {...pageProps} />
            <FloatingWhatsapp />
          </main>
        </div>
      </QueryClientProvider>
    </>
  );
}