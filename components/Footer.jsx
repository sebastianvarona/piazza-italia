import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-sky-800/60 to-blue-900/60 py-10 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-8 grid grid-cols-1 sm:grid-cols-3 gap-12">
        <FooterColumn title="Dirección">
          <ul className="text-sm">
            <li>Km 5 vía Armenia</li>
            <li>Mall San Pablo</li>
            <li>Pereira – Risaralda</li>
          </ul>
        </FooterColumn>
        <FooterColumn title="Nuestros horarios">
          <ul className="text-sm">
            <li>Lunes – Domingo :</li>
            <li>12am – 10pm</li>
            <li className="mt-4 opacity-90">
              *Lunes festivo aplica horario normal y cierra el martes*
            </li>
          </ul>
        </FooterColumn>
        <FooterColumn title="Contáctanos">
          <ul className="text-sm">
            <li>(315) 3464310</li>
            <li className="mt-4 opacity-90">*Ya hacemos domicilios*</li>
          </ul>
        </FooterColumn>
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-8 flex justify-between mt-10">
        <span className="block">Copyright © 2022. Piazza Italia.</span>
        <span className="block hover:underline">
          <Link href="https://sebastianvarona.vercel.app/" target={'_blank'}>
            Desarrollado por Sebastián Varona.
          </Link>
        </span>
      </div>
    </footer>
  );
}

export function FooterColumn({ title, children }) {
  return (
    <div className="flex flex-col gap-4">
      <h5 className="text-xl font-title font-medium">{title}</h5>
      {children}
    </div>
  );
}
