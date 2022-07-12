import Image from 'next/image';

export default function Quote() {
  return (
    <div className="bg-gradient-to-r from-sky-800/60 to-blue-900/60 py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mx-auto max-w-6xl px-4 sm:px-8">
        <div>
          <Image src={'/home/imagen4.png'} width={846} height={845} alt="" />
        </div>
        <h4 className="flex flex-col justify-center">
          <q className="text-3xl font-bold text-white">
            Una regla simple y potente: siempre hay que ofrecer más de lo que el
            cliente espera.
          </q>
          <cite className="text-white mt-10">– Nelson Boswell –</cite>
        </h4>
      </div>
    </div>
  );
}
