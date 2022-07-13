import Image from 'next/image';

export default function AcercaDe() {
  return (
    <div className="my-24">
      <h2 className="text-5xl sm:text-6xl font-title text-gold font-bold opacity-80 text-center">
        Acerca de
      </h2>
      <h3 className="text-3xl sm:text-4xl text-center relative z-10 bottom-7">
        Nuestro Restaurante
      </h3>
      <p className="max-w-3xl text-center mx-auto text-lg">
        En el corazón del Eje Cafetero convenientemente ubicado al km. 5 vía
        Armenia se encuentra el restaurante Piazza Italia, en el nuevo Mall San
        Pablo. Un restaurante de Pasta, Amore e Fantasie unos de los lugares mas
        románticos de Pereira donde degustar de los mejores platos italianos,
        compartir con tu seres queridos, celebraciones y noches románticas.
        Amplio parqueadero vigilado.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative max-w-6xl mx-auto mt-20 px-4 sm:px-8">
        <div>
          <Image
            className="rounded-lg bg-gray-200"
            src={'/home/imagen1.png'}
            width={960}
            height={1150}
            alt=""
          />
          <h3 className="text-2xl font-medium text-center text-gold font-title">
            Comida de calidad
          </h3>
          <p className="text-center text-md mt-2">
            Piazza Italia, ya un favorito en la zona. Aquí encontraras decena de
            platos típicos de pastas y nuestra famosa pizza de atún y cebollas.
            Deliciosos platos italianos caseros, que incluyen mariscos, carnes y
            pastas y amplia selección de bebidas. Menú completo tanto para el
            almuerzo como para la cena, hasta tarde. próximamente con animación
            los fines de semanas.
          </p>
        </div>
        <div>
          <Image
            className="rounded-lg bg-gray-200"
            src={'/home/imagen2.png'}
            width={960}
            height={1150}
            alt=""
          />
          <h3 className="text-2xl font-medium text-center text-gold font-title">
            Excelente ambiente
          </h3>
          <p className="text-center text-md mt-2">
            Restaurante Piazza Italia asomado en el escenario mágico y
            panorámico del Eje Cafetero con espacios nuevos, luminosos y
            acogedores, al igual de nuestro personal de recepción y de sala que
            con gran placer les asistirá durante tu tiempo con nosotros. Aquí
            podrá plácidamente degustar de una copa de vino o coctel en nuestro
            balcón panorámico.
          </p>
        </div>
        <div>
          <Image
            className="rounded-lg bg-gray-200"
            src={'/home/imagen3.png'}
            width={960}
            height={1150}
            alt=""
          />
          <h3 className="text-2xl font-medium text-center text-gold font-title">
            Gran experticia
          </h3>
          <p className="text-center text-md mt-2">
            Mas de 60 años de experiencia con nuestros 3 chefs Antonio,
            Alejandro y Javier que con pasión, conocimiento y amor por esta
            antigua arte culinaria se dedican a interactuar personalmente con el
            cliente en la presentación de platos típicos Italianos las cuales
            delinean el estilo y amor por la cocina a la que estamos vinculado.
            Hacer nuestro trabajo significa sacrificarnos para sacar el máximo
            partido de nuestras habilidades, para satisfacer las necesidades de
            nuestros huéspedes y brindarles momentos de placer.
          </p>
        </div>
      </div>
    </div>
  );
}
