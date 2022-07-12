import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import NavbarMobileMenu from '../components/NavbarMobileMenu';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import images from '../helpers/gallery';

export default function Galeria() {
  return (
    <div>
      <Head>
        <title>Piazza Italia - Carta</title>
      </Head>
      <header>
        <Navbar />
        <NavbarMobileMenu />
      </header>
      <main>
        <Banner title="Galería" url={'/gallery/background.jpeg'} />
        <section className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-flow-row mx-auto max-w-6xl px-8 my-20">
          {images.map((image) => (
            <Item path={image.path} />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export function Item({ path }) {
  return (
    <div className="block bg-gray-300 overflow-hidden rounded-lg">
      <Image src={path} width={960} height={1010} layout={'responsive'} />
    </div>
  );
}
