import Features from '@/components/features';
import Hero from '@/components/hero';
import LatestProperties from '@/components/latest-properties';
import { useFetch } from 'hooks/useFetch';
import Head from 'next/head';

export default function Home() {
  const { data, error, isLoading } = useFetch('/api/latest');

  return (
    <>
      <Head>
        <title>Homely</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Hero />
      <LatestProperties data={data} error={error} isLoading={isLoading} />
      <Features />
    </>
  );
}
