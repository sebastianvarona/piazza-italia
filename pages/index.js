import Head from 'next/head';
import Footer from '../components/Footer';
import AcercaDe from '../components/Home/AcercaDe';
import Banner from '../components/Home/Banner';
import CTA from '../components/Home/CTA';
import Quote from '../components/Home/Quote';
import Navbar from '../components/Navbar';
import NavbarMobileMenu from '../components/NavbarMobileMenu';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Piazza Italia</title>
        <meta name="description" content="Piazza Italia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="relative">
        <NavbarMobileMenu />
        <Navbar />
      </header>
      <main>
        <Banner />
        <AcercaDe />
        <Quote />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
