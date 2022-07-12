import Link from 'next/link';

export default function CTA() {
  return (
    <div className="my-10">
      <h4 className="text-center text-4xl font-title font-medium">
        Reserva una mesa y disfruta de una experiencia excepcional
      </h4>
      <div className="flex justify-center">
        <Link href={'/reservas'}>
          <button className="inline-block bg-gold/70 px-4 py-3 rounded-lg font-semibold text-white mt-6 hover:bg-gold/90 transition">
            Hacer Reservación
          </button>
        </Link>
      </div>
    </div>
  );
}
