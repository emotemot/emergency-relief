import Head from 'next/head';
import { getCookie } from 'cookies-next';
import { GetServerSideProps } from 'next';

import Header from '@/components/Header/Header';
import Button from '@/components/Button/Button';
import Link from 'next/link';

export default function Home({ address: cachedAddress }: { address?: string }) {
  return (
    <>
      <Head>
        <title>Emergency Relief</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="container mx-auto py-10">
        <Header cachedAddress={cachedAddress} />

        <main className="space-y-5 mt-8">
          <div className="grid grid-cols-12 gap-4 gap-y-8">
            <div className="flex flex-col flex-1 justify-between col-span-12 lg:col-span-8 py-8 px-6 rounded-3xl space-y-14 bg-[#F1F1EF]">
              <h1 className="text-4xl lg:text-7xl font-semibold">
                An international emergency
              </h1>

              <span className="text-lg block">
                Turkey has declared a state of emergency after two powerful
                earthquakes, with magnitudes of 7.8 and 7.5, struck the country
                on 6 February 2023, resulting in over 11,700 deaths, 3,450
                collapsed buildings, and affecting over 23 million people.
              </span>

              <Link href="/donate">
                <Button className="w-fit">Donate now</Button>
              </Link>
            </div>

            <div className="flex flex-1 flex-col justify-between col-span-12 lg:col-span-4 space-y-4">
              <div className="space-y-3 bg-[#F1F1EF] p-6 rounded-3xl">
                <h2 className="text-4xl font-semibold">11,700+</h2>
                <span className="block text-lg">
                  Death toll from the lates official figures
                </span>
              </div>

              <div className="space-y-3 bg-[#F1F1EF] p-6 rounded-3xl">
                <h2 className="text-4xl font-semibold">7.8</h2>
                <span className="block text-lg">
                  Magnitudes of the mainshock and the largest aftershock.
                </span>
              </div>

              <div className="space-y-3 bg-[#F1F1EF] p-6 rounded-3xl">
                <h2 className="text-4xl font-semibold">3,450</h2>
                <span className="block text-lg">
                  Collapsed buildings on people trapped in the ruble.
                </span>
              </div>
            </div>
          </div>

          <div className="bg-[#F1F1EF] px-6 py-8 rounded-3xl">
            <h2 className="text-4xl font-semibold">About us</h2>
            <span className="mt-10 block text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              ultrices tortor vitae tristique ullamcorper. In mollis volutpat
              mauris, et accumsan nisi placerat ac. Aenean eu dui velit.
              Suspendisse elementum purus finibus sem facilisis, eu porta tortor
              accumsan. Donec malesuada risus a urna feugiat, id sollicitudin
              risus semper. Fusce aliquet nisi sapien, vel dignissim quam
              tincidunt sit amet. Morbi molestie felis sit amet enim mattis
              commodo. Praesent purus mi, varius congue turpis non, pharetra
              tristique justo. Nam auctor tortor eget ultrices euismod. Nam
              placerat mollis ligula, a ullamcorper ante. Sed id viverra diam.
              Donec sem nibh, viverra vel velit quis, aliquam mattis ante. Duis
              sit amet est ante.
            </span>
          </div>

          <div className="bg-[#F1F1EF] px-6 py-8 rounded-3xl">
            <h2 className="text-4xl font-semibold">Stats</h2>

            <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="bg-[#E7E5E3] p-6 rounded-3xl space-y-3">
                <h3 className="text-4xl font-semibold">111M</h3>
                <span className="block text-lg">Funded</span>
              </div>

              <div className="bg-[#E7E5E3] p-6 rounded-3xl space-y-3">
                <h3 className="text-4xl font-semibold">111M</h3>
                <span className="block text-lg">Funded</span>
              </div>

              <div className="bg-[#E7E5E3] p-6 rounded-3xl space-y-3">
                <h3 className="text-4xl font-semibold">111M</h3>
                <span className="block text-lg">Funded</span>
              </div>

              <div className="bg-[#E7E5E3] p-6 rounded-3xl space-y-3">
                <h3 className="text-4xl font-semibold">111M</h3>
                <span className="block text-lg">Funded</span>
              </div>

              <div className="bg-[#E7E5E3] p-6 rounded-3xl space-y-3">
                <h3 className="text-4xl font-semibold">111M</h3>
                <span className="block text-lg">Funded</span>
              </div>

              <div className="bg-[#E7E5E3] p-6 rounded-3xl space-y-3">
                <h3 className="text-4xl font-semibold">111M</h3>
                <span className="block text-lg">Funded</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<{
  address?: string;
}> = async ({ req, res }) => {
  const address = getCookie('address', { req, res });

  if (!address) {
    return {
      props: {},
    };
  }

  return {
    props: {
      address: address.toString(),
    },
  };
};
