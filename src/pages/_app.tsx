import '../styles/global.scss';
import 'material-symbols/outlined.scss';
import { Poppins } from '@next/font/google';
import type { AppProps } from 'next/app';
import { Header } from '@/components/Header';
import { QueryClient, QueryClientProvider } from 'react-query';
import mainStyle from '@/styles/components/main.module.scss'
import { FloatingWhatsapp } from '@/components/FloatingWhatsapp';

const poppins = Poppins({subsets: ['latin'], weight: ['100','200','300','400', '500', '600','700', '800', '900']})

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <div  className={poppins.className}>
        <Header />
        <main className={mainStyle.main}>
          <Component {...pageProps} />
          <FloatingWhatsapp />
        </main>
      </div>  
    </QueryClientProvider>
  );
}