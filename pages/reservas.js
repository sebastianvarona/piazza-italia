import Head from 'next/head';
import Navbar from '../components/Navbar';
import NavbarMobileMenu from '../components/NavbarMobileMenu';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

const horarios = [
  {
    dia: 'Lunes',
    horario: '12:00pm - 10:00pm',
  },
  {
    dia: 'Martes',
    horario: '12:00pm - 10:00pm',
  },
  {
    dia: 'Miercoles',
    horario: '12:00pm - 10:00pm',
  },
  {
    dia: 'Jueves',
    horario: '12:00pm - 10:00pm',
  },
  {
    dia: 'Viernes',
    horario: '12:00pm - 10:00pm',
  },
  {
    dia: 'Sabado',
    horario: '12:00pm - 10:00pm',
  },
  {
    dia: 'Domingo',
    horario: '12:00pm - 10:00pm',
  },
];

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
        <Banner title="Reservas" url={'/reservas/background.jpg'} />
        <section className="mx-auto max-w-6xl px-8 grid grid-cols-1 sm:grid-cols-2 gap-12 py-20">
          <div className="flex flex-col gap-10 justify-center">
            <div>
              <h2 className="text-2xl font-medium font-title mb-2">
                Reservaciones:
              </h2>
              <p>(315) 3464310</p>
            </div>
            <div>
              <h2 className="text-2xl font-medium font-title mb-2">
                Dirección:
              </h2>
              <p>Km 5 vía Armenia</p>
              <p>Mall San Pablo</p>
              <p>Pereira – Risaralda</p>
            </div>
          </div>
          <div className="bg-blue-900/50 text-white rounded-lg py-12 px-6">
            <h2 className="text-2xl font-medium font-title mb-8">
              Horarios de servicio:
            </h2>
            <table className="has-white-color has-text-color">
              <tbody>
                {horarios.map((horario, index) => (
                  <tr key={index} className="py-1">
                    <td>{horario.dia}</td>
                    <td>{horario.horario}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
