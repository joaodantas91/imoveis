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
import FlexSearchContext, { FlexSearchProvider } from '@/context/FlexSearchContext';


const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] })

export default function App ({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()
  const router = useRouter();
  const isHomePage = router.pathname === '/';
  const title = "Elisangela Brígida - Consultoria Imobiliária";
  const description = "Procurando os melhores imóveis para comprar ou alugar em Belém e Região Metropolitana? Conte com Elisangela Brigida - Consultoria Imobiliária! Encontre o lar dos seus sonhos com diversas opções de qualidade. Entre em contato agora mesmo e realize seu sonho de morar no lugar ideal!"
  return (
    <FlexSearchProvider>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="imóveis à venda, imóveis para alugar, imóveis em Belém, imóveis na Região Metropolitana, Elisangela Brígida, consultoria imobiliária" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Elisangela Brígida" />
        <meta name="revisit-after" content="7 days" />
        <meta name="image" content="/img/meta.png"></meta>


        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://elisangelabrigidaimoveis.com.br/" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/img/meta.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://elisangelabrigidaimoveis.com.br/" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content="/img/meta.png" />
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
    </FlexSearchProvider>
  );
}