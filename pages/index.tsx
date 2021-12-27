import Head from 'next/head';
import dynamic from 'next/dynamic';
import { View } from '@aws-amplify/ui-react';

// import { Main } from '../components/home/Main';
// import { Footer } from '../components/shared/Footer';

const Header = dynamic(
  () => import('../components/shared/Header').then((mod) => mod.Header),
  { ssr: false }
);

const Main = dynamic(
  () => import('../components/home/Main').then((mod) => mod.Main),
  { ssr: false }
);

const Footer = dynamic(
  () => import('../components/shared/Footer').then((mod) => mod.Footer),
  { ssr: false }
);

export default function LandingPage(props) {
  return (
    <View {...props}>
      <Head>
        <title>Netflix - Watch TV Shows Online, Watch Movies Online</title>
        <link
          as="link"
          rel="shortcut icon"
          href="https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.ico"
        />
        <meta
          content="watch movies, movies online, watch TV, TV online, TV shows online, watch TV shows, stream movies, stream tv, instant streaming, watch online, movies, watch movies United States, watch TV online, no download, full length movies"
          name="keywords"
        />
        <meta
          content="Watch Netflix movies &amp; TV shows online or stream right to your smart TV, game console, PC, Mac, mobile, tablet and more."
          name="description"
        />
      </Head>
      <Header />
      <Main />
      <Footer />
    </View>
  );
}
