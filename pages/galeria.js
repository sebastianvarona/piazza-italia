import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import NavbarMobileMenu from '../components/NavbarMobileMenu';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import images from '../features/helpers/gallery';

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
        <section className="grid max-w-6xl grid-flow-row grid-cols-1 gap-3 px-8 mx-auto my-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {images.map((image, index) => (
            <Item key={index} path={image.path} />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export function Item({ path }) {
  return (
    <div className="block overflow-hidden bg-gray-200 rounded-lg">
      <Image
        src={path}
        width={960}
        height={1010}
        alt=""
        layout={'responsive'}
      />
    </div>
  );
}
