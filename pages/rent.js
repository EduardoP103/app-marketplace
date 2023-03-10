import PropertiesContainer from '@/components/properties-container';
import { useFetch } from 'hooks/useFetch';
import Head from 'next/head';

export default function Rent() {
  const { data, error, isLoading } = useFetch('/api/properties?status=rent');

  return (
    <>
      <Head>
        <title>Propiedades en renta | Homely</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <PropertiesContainer
        data={data}
        error={error}
        isLoading={isLoading}
        title="Propiedades en renta"
      />
    </>
  );
}
