import '../styles/global.scss';
import type { AppProps } from 'next/app';
import { Header } from '@/components/Header';
import { QueryClient, QueryClientProvider } from 'react-query';



export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}