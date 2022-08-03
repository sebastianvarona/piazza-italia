export default function Banner() {
  return (
    <div className="relative">
      <video
        src="/buon_compleanno_venezia_comprimido.m4v"
        autoPlay
        muted
        className="w-full h-[110vh] object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center gap-10">
        <div className="h-1 bg-gold w-64"></div>
        <div>
          <h2 className="text-gold text-center text-2xl uppercase leading-3">
            Ristorante
          </h2>
          <h1 className="text-7xl font-title text-center font-medium text-white	">
            Piazza Italia
          </h1>
        </div>
        <div className="h-1 bg-gold w-64"></div>
      </div>
    </div>
  );
}
