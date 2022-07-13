import Head from 'next/head';
import Navbar from '../Navbar';
import NavbarMobileMenu from '../NavbarMobileMenu';
import Banner from '../Banner';
import Footer from '../Footer';

export default function Layout({ title }) {
  return (
    <div>
      <Head>
        <title>Piazza Italia - {title}</title>
      </Head>
      <header>
        <Navbar />
        <NavbarMobileMenu />
      </header>
      <main>
        <Banner title="Nuestra Carta" url={'/menu/background.png'} />
        <Section title="Entradas" color="white">
          <Item>
            <table>
              <tbody>
                <tr className="my-1">
                  <td>
                    <span>
                      <b>M</b>
                    </span>
                    <strong>
                      <strong>
                        <strong>OZARELLA DE BUFFALA</strong>
                      </strong>
                    </strong>
                    <br />
                    <em>
                      Burata de búfala, jamón serrano, rueda de tomate, salsa
                      pesto, albahaca, crostini de pan
                    </em>
                  </td>
                  <td className="pl-10 md:pl-20">$32.900</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>
                      <strong>
                        <strong>BRUSCHETTA NAPOLETANA</strong>
                        <br />
                      </strong>
                    </strong>
                    <em>
                      <em>
                        pan tostado en horno, tomate, aceite de oliva, orégano,
                        albahaca
                      </em>
                    </em>
                    .
                  </td>
                  <td className="pl-10 md:pl-20">$9.100</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>
                      <strong>
                        <strong>CROSTINI DE SALMÓN</strong>
                        <br />
                      </strong>
                    </strong>
                    <em>
                      <em>
                        pan tostado en horno, salmón ahumado, limón, pimienta
                        negra
                      </em>
                    </em>
                    .
                  </td>
                  <td className="pl-10 md:pl-20">$21.900</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>
                      <strong>
                        <strong>CEVICHE DE CAMARÓN</strong>
                        <br />
                      </strong>
                    </strong>
                    <em>
                      <em>
                        camarones, jengibre, cebolla morada, zumo de naranjas,
                        salsa de tomate, cilantro, brandy.
                      </em>
                    </em>
                  </td>
                  <td className="pl-10 md:pl-20">$39.600</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>POLPETTINE AL POMODORO</strong>
                    <br />
                    albóndigas de res, huevo,
                    <br />
                    parmesano, leche, perejil, en salsa de tomate.
                  </td>
                  <td className="pl-10 md:pl-20">$21.900</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>PORTOBELLOS CON QUESO</strong>
                    <br />
                    <em>champiñones, cebolla, ajo, queso ahumado.</em>
                  </td>
                  <td className="pl-10 md:pl-20">$27.200</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>CANASTA DE PAN CAMPESINO AL HORNO</strong>
                  </td>
                  <td className="pl-10 md:pl-20">$13.900</td>
                </tr>
              </tbody>
            </table>
          </Item>
        </Section>
        <Section title="Platos Fuertes" color={'bg-gray-100'}>
          <Item title="Ensaladas - Insalates">
            <table>
              <tbody>
                <tr className="my-1">
                  <td>
                    <strong>ENSALADA MARINERA</strong>
                    <br />
                    camarones, almejas, palmitos,tomate, lechugas, cebolla,
                    vinagreta de la casa, picatostes.
                  </td>
                  <td className="pl-10 md:pl-20">$40.800</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>
                      <strong>ENSALADA MEDITERRANEA</strong>
                      <br />
                    </strong>
                    <em>
                      tomate, atún, aceitunas negras, lechuga, cebolla morada
                      caramelada, pepino, nuez, alcaparras.
                    </em>
                  </td>
                  <td className="pl-10 md:pl-20">$35.200</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>
                      <strong>ENSALADA CESAR</strong>
                      <br />
                    </strong>
                    <em>
                      tiras de pollo, rúcula, lechuga, queso parmesano, aceite
                      de oliva, mozzarella de búfala, aceite balsámico, salsa
                      Dijon, limón, croutons
                    </em>
                    .
                  </td>
                  <td className="pl-10 md:pl-20">$36.200</td>
                </tr>
              </tbody>
            </table>
          </Item>
          <Item title="Pizzas - Pizze">
            <table>
              <tbody>
                <tr className="my-1">
                  <td>
                    <strong>
                      <strong>MARGHERITA</strong>
                    </strong>
                    <br />
                    <em>tomate, queso mozzarella, albahaca.</em>
                  </td>
                  <td className="pl-10 md:pl-20">$28.300</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>
                      <strong>NAPOLETANA</strong>
                    </strong>
                    <br />
                    <em>tomate, queso mozzarella, anchoas, albahaca</em>.
                  </td>
                  <td className="pl-10 md:pl-20">$32.800</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>
                      <strong>CAPRESE</strong>
                    </strong>
                    <br />
                    <em>tomate cherry, queso mozzarella, pesto.</em>
                  </td>
                  <td className="pl-10 md:pl-20">$31.700</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>QUATTRO FORMAGGI</strong>
                    <br />
                    mozarela, queso azul, provola, pecorino.
                  </td>
                  <td className="pl-10 md:pl-20">$39.600</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>
                      <strong>PROSCIUTTO</strong>
                    </strong>
                    <br />
                    jamón artesanal, queso mozzarella, rúgula.
                  </td>
                  <td className="pl-10 md:pl-20">$37.900</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>PORTOBELLO</strong>
                    <br />
                    champiñones portobello, queso ahumado, rúgula y parmesano.
                  </td>
                  <td className="pl-10 md:pl-20">$36.300</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>PEPPERONI</strong>
                    <br />
                    pepperoni, queso mozzarella, pimienta.
                  </td>
                  <td className="pl-10 md:pl-20">$36.300</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>HARLEY’S PIZZA</strong>
                    <br />
                    chorizo italiano, papada de cerdo, tocineta ahumada,
                    pancetta, queso mazzarella y tomate.
                  </td>
                  <td className="pl-10 md:pl-20">$43.000</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>MARINERA</strong>
                    <br />
                    camarones, almejas, palmitos de cangrejos, tomate, cebolla,
                    pimienta.
                  </td>
                  <td className="pl-10 md:pl-20">$39.600</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>PANCETTA</strong>
                    <br />
                    tocineta ahumada, mozarela, tomate, parmesano.
                  </td>
                  <td className="pl-10 md:pl-20">$34.900</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>CALZONE</strong>
                    <br />
                    tocineta, tomate, champiñones, mozzarella, chorizo y ricota.
                  </td>
                  <td className="pl-10 md:pl-20">$39.600</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>TONNO E CIPOLLE</strong>
                    <br />
                    salsa de tomate, aceite de oliva, atún, cebolla y pimienta
                    negra.
                  </td>
                  <td className="pl-10 md:pl-20">$36.200</td>
                </tr>
              </tbody>
            </table>
          </Item>
          <Item title="Pasta - Primi Piatti">
            <table>
              <tbody>
                <tr className="my-1">
                  <td>
                    <strong>LINGUINE MARINERA</strong>
                    <br />
                    linguini, mejillones, gambas, almejas, calamar, vino blanco,
                    cebolla, ajo, tomate triturado, aceite de oliva y paprica.
                  </td>
                  <td className="pl-10 md:pl-20">$40.800</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>
                      <strong>FETTUCCINE CAMARONES, SALMON Y BRANDY</strong>
                    </strong>
                    <br />
                    pasta, camarones, salmón, brandy, pimienta.
                  </td>
                  <td className="pl-10 md:pl-20">$43.100</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>
                      <strong>FETTUCCINE BOSCAIOLA</strong>
                    </strong>
                    <br />
                    pasta, portobello, salciccia italiana, papada, tocineta,
                    arveja, tomate y parmesano.
                  </td>
                  <td className="pl-10 md:pl-20">$38.600</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>
                      <strong>PASTA A LA PUTTANESCA</strong>
                    </strong>
                    <br />
                    spaghetti, aceite de oliva, ajo, alcaparras, anchovas,
                    aceitunas, tomate.
                  </td>
                  <td className="pl-10 md:pl-20">$31.900</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>
                      <strong>PASTA ARRABBIATA</strong>
                    </strong>
                    <br />
                    penne, aceite de oliva, tomate, chiles, ajo, perejil.{' '}
                    <span className="text-red-400">(picante)</span>
                  </td>
                  <td className="pl-10 md:pl-20">$22.000</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>SPAGHETTI A LA NAPOLETANA</strong>
                    <br />
                    pasta, tomate cherry,
                    <br />
                    cebolla, ajo, aceite de oliva, perejil, albahaca.
                  </td>
                  <td className="pl-10 md:pl-20">$26.000</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>PASTA AL BURRO</strong>
                    <br />
                    pasta spaghetti, mantequilla, queso
                    <br />
                    parmesano.
                  </td>
                  <td className="pl-10 md:pl-20">$23.900</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>
                      <strong>PASTA ALFREDO</strong>
                    </strong>
                    <br />
                    pasta fetuccini, mantequilla, crema de leche, queso
                    parmesano, pimienta blanca, nuez moscada.
                  </td>
                  <td className="pl-10 md:pl-20">$33.900</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>
                      <strong>PENNETTE 4 QUESOS</strong>
                    </strong>
                    <br />
                    pasta penne, mozzarella, queso azul, queso pecorino,
                    parmesano.
                  </td>
                  <td className="pl-10 md:pl-20">$38.600</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>SPAGHETTI CARBONARA</strong>:<br />
                    pasta, tocineta ahumada, ajo, huevo, crema de leche.
                  </td>
                  <td className="pl-10 md:pl-20">$31.900</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>
                      <strong>SPAGHETTI A LA AMATRICIANA</strong>:
                    </strong>
                    <br />
                    pasta, papada de cerdo, tomate, ají, queso pecorino, vino
                    blanco.{' '}
                    <span className="text-red-400">(un poco picante)</span>
                  </td>
                  <td className="pl-10 md:pl-20">$34.000</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>PASTA TOCINETA Y CHAMPIÑON</strong>
                    <br />
                    pasta, tocineta ahumada, champiñones, ajo, cebolla, vino
                    blanco, queso, pimienta.
                  </td>
                  <td className="pl-10 md:pl-20">$36.300</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>LASAGÑA DE CARNE</strong>:<br />
                    pasta para lasaña, carne molida, tomate, cebolla, ajo,
                    albahaca, tomate, mozzarella, parmesano.
                  </td>
                  <td className="pl-10 md:pl-20">$32.800</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>LASAGÑA DE POLLO</strong>
                    <br />
                    pasta para lasaña, pollo, tomate, cebolla, ajo, albahaca,
                    tomate, mozzarella, parmesano.
                  </td>
                  <td className="pl-10 md:pl-20">$31.800</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>TAGLIATELLE BOLOGNESA</strong>
                    <br />
                    pasta tagliatelle, carne molida
                    <br />
                    de res, tomate, ajo, cebolla, laurel. parmesano.
                  </td>
                  <td className="pl-10 md:pl-20">$32.800</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>CONCHIGLIONI RIPIENI</strong>
                    <br />
                    pasta conchiglioni relleno de pollo, ricota, bechamel y
                    queso parmesano.
                  </td>
                  <td className="pl-10 md:pl-20">$33.900</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>RAVIOLI PORTOBELLO</strong>
                    <br />
                    pasta ravioli rellenos de carne, champiñones portobello,
                    queso crema, parmesano.
                  </td>
                  <td className="pl-10 md:pl-20">$36.200</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>RAVIOLI, RICOTTA Y ESPINACA</strong>
                    <br />
                    pasta ravioli, queso ricote, espinaca, tomate, parmesano.
                  </td>
                  <td className="pl-10 md:pl-20">$32.000</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>RISOTTO PORTOBELLO</strong>
                    <br />
                    champiñones portobellos, tocineta ahumada, vino blanco,
                    parmesano. (se demora un poco)
                  </td>
                  <td className="pl-10 md:pl-20">$34.000</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>RISOTTO MARINERA</strong>
                    <br />
                    arroz carnaroli, camarones, calamares, mejillones, pulpo,
                    palmitos de cangrejos, vino blanco. (se demora un poco)
                    <br />
                    <br />
                    Adicionales:
                    <br />– Porción de queso parmesano $8.000
                  </td>
                  <td className="pl-10 md:pl-20">$42.900</td>
                </tr>
              </tbody>
            </table>
          </Item>
          <Item title="Carnes - Secondi Piatti">
            <table>
              <tbody>
                <tr className="my-1">
                  <td>
                    <strong>
                      <strong>FILET MIGNON AL VINO</strong>
                    </strong>
                    <br />
                    carne de res, tocineta ahumada, ajo, vino tinto.
                  </td>
                  <td className="pl-10 md:pl-20">$43.100</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>
                      <strong>LOMO DE CERDO AL VINO</strong>
                    </strong>
                    <br />
                    ruedas de lomo de cerdo, ajo, cebolla, salsa al vino.
                  </td>
                  <td className="pl-10 md:pl-20">$32.800</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>BISTECCA ALLA FIORENTINA</strong>
                    <br />
                    corte de lomo con su característico hueso en forma de T y un
                    peso mínimo de 2.5lb preparado a la parrilla y terminado a
                    la mesa del cliente. La simplicidad de una cocción en su
                    máxima expresión. Para 2 o mas personas y un tiempo servicio
                    de 40 minutos aprox.
                  </td>
                  <td className="pl-10 md:pl-20">$140.000</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>
                      <strong>INVOLTINI DI POLLO</strong>
                    </strong>
                    <br />
                    rollos de pollo, parmesano, jamón, perejil, pimienta negra,
                    queso ahumado.
                  </td>
                  <td className="pl-10 md:pl-20">$36.200</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>POLLO AL VINO</strong>
                    <br />
                    pechuga de pollo en salsa chardonnay.
                  </td>
                  <td className="pl-10 md:pl-20">$29.400</td>
                </tr>
              </tbody>
            </table>
          </Item>
          <Item title="Pescados - Pesce">
            <table>
              <tbody>
                <tr className="my-1">
                  <td>
                    <strong>
                      <strong>SALMÓN AL BRANDY</strong>:
                    </strong>
                    <br />
                    salmón, ajo, brandy y aceite de oliva.
                  </td>
                  <td className="pl-10 md:pl-20">$42.900</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>
                      <strong>SALMON AL VINO BLANCO:</strong>
                    </strong>
                    <br />
                    salmón, vino blanco y aceite de oliva.
                  </td>
                  <td className="pl-10 md:pl-20">$40.900</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>PARGO MEDITERRANEO</strong>:<br />
                    Pargo rojo a la plancha en salsa de camarones y mixtura.
                  </td>
                  <td className="pl-10 md:pl-20">$42.000</td>
                </tr>
              </tbody>
            </table>
          </Item>
        </Section>
        <Section title="Bebidas" color="white">
          <Item title="Limonadas">
            <table>
              <tbody>
                <tr className="my-1">
                  <td>
                    <strong>COCO</strong>
                  </td>
                  <td className="pl-10 md:pl-20">$8.900</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>
                      <br />
                      MANGO BICHE
                    </strong>
                  </td>
                  <td className="pl-10 md:pl-20">$8.900</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>NATURAL</strong>
                  </td>
                  <td className="pl-10 md:pl-20"> $6.800 </td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>
                      JARRA DE <strong>NATURAL</strong>
                    </strong>
                  </td>
                  <td className="pl-10 md:pl-20"> $29.400 </td>
                </tr>
              </tbody>
            </table>
          </Item>
          <Item title="Jugos">
            <table>
              <tbody>
                <tr className="my-1">
                  <td>
                    <strong>MARACUYÁ</strong>
                  </td>
                  <td className="pl-10 md:pl-20">$6.800</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>LULO</strong>
                  </td>
                  <td className="pl-10 md:pl-20">$6.800</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>MANGO </strong>{' '}
                  </td>
                  <td className="pl-10 md:pl-20">$6.800</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>FRESA</strong>
                  </td>
                  <td className="pl-10 md:pl-20">$6.800</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>GUANABANA</strong>
                  </td>
                  <td className="pl-10 md:pl-20">$6.800</td>
                </tr>
              </tbody>
            </table>
          </Item>
          <Item title="Malteadas">
            <table>
              <tbody>
                <tr className="my-1">
                  <td>
                    <strong>CAFÉ</strong>
                  </td>
                  <td className="pl-10 md:pl-20">$12.000</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>
                      <strong>OREO</strong>
                    </strong>
                  </td>
                  <td className="pl-10 md:pl-20"> $12.000 </td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>FRESA</strong>
                  </td>
                  <td className="pl-10 md:pl-20"> $12.000 </td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>CAFÉ CON WHISKY</strong>
                  </td>
                  <td className="pl-10 md:pl-20"> $15.000 </td>
                </tr>
              </tbody>
            </table>
          </Item>
          <Item title="Aguas">
            <table>
              <tbody>
                <tr className="my-1">
                  <td>
                    <strong>AGUA SIN GAS</strong>
                  </td>
                  <td className="pl-10 md:pl-20">$6.800</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>
                      <strong>AGUA CON GAS</strong>
                    </strong>
                  </td>
                  <td className="pl-10 md:pl-20">$6.800</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>COCA-COLA</strong>
                  </td>
                  <td className="pl-10 md:pl-20">$6.800</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>COCA-COLA SIN AZUCAR</strong>
                  </td>
                  <td className="pl-10 md:pl-20">$6.800</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>BRETAÑA</strong>
                  </td>
                  <td className="pl-10 md:pl-20">$6.800</td>
                </tr>
              </tbody>
            </table>
          </Item>
          <Item title="Cervezas">
            <table>
              <tbody>
                <tr className="my-1">
                  <td>
                    <strong>PERONI</strong>
                  </td>
                  <td className="pl-10 md:pl-20">$10.200</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>CLUB COLOMBIA (DORADA,ROJA Y NEGRA)</strong>
                  </td>
                  <td className="pl-10 md:pl-20">$7.900</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>CORONA</strong>
                  </td>
                  <td className="pl-10 md:pl-20">$10.200</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>AGULA LIGHT</strong>
                  </td>
                  <td className="pl-10 md:pl-20">$7.900</td>
                </tr>
              </tbody>
            </table>
          </Item>
          <Item title="Sangrías">
            <table>
              <tbody>
                <tr className="my-1">
                  <td>
                    <strong>JARRA DE SANGRÍA BLANCA</strong>
                  </td>
                  <td className="pl-10 md:pl-20">$80.000</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>JARRA DE SANGRÍA ROSADA</strong>
                  </td>
                  <td className="pl-10 md:pl-20">$80.000</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>JARRA DE SANGRÍA TINTA </strong>{' '}
                  </td>
                  <td className="pl-10 md:pl-20">$80.000</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>COPA DE SANGRÍA</strong>
                  </td>
                  <td className="pl-10 md:pl-20">$15.000</td>
                </tr>
              </tbody>
            </table>
          </Item>
          <Item title="Vinos">
            <table>
              <tbody>
                <tr className="my-1">
                  <td>
                    <strong>ARIONE BLANCO</strong>
                  </td>
                  <td className="pl-10 md:pl-20">$55.000</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>ARIONE ROSSATO</strong>
                  </td>
                  <td className="pl-10 md:pl-20">$55.000</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>ARIONE ROSSO </strong>{' '}
                  </td>
                  <td className="pl-10 md:pl-20">$55.000</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>ARIONE MERLOT</strong>
                  </td>
                  <td className="pl-10 md:pl-20">$70.000</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>ARIONE CABERNET</strong>
                  </td>
                  <td className="pl-10 md:pl-20">$70.000</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>ARIONE SHIRAZ</strong>
                  </td>
                  <td className="pl-10 md:pl-20">$70.000</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>ARIONE NERO D’AVOLA</strong>
                  </td>
                  <td className="pl-10 md:pl-20">$75.000</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>PICCINI LAMBRUSCO ROSSO</strong>
                  </td>
                  <td className="pl-10 md:pl-20">$65.000</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>PICCINI LAMBRUSCO BLANCO</strong>
                  </td>
                  <td className="pl-10 md:pl-20">$65.000</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>SOTTANO MABEC</strong>
                  </td>
                  <td className="pl-10 md:pl-20">$160.000</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>SOTTANO CABERNET</strong>
                  </td>
                  <td className="pl-10 md:pl-20">$180.000</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>TORRELONGLARES RESERVA</strong>
                  </td>
                  <td className="pl-10 md:pl-20">$115.000</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>
                      COPA DE VINO DE VINOS ARIONE BLANCO, ROSADO Y ROSSO
                    </strong>
                  </td>
                  <td className="pl-10 md:pl-20">$15.000</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>
                      COPA DE VINO ARIONE MERLOT, CABERNET Y SHIRAZ
                    </strong>
                  </td>
                  <td className="pl-10 md:pl-20">$18.000</td>
                </tr>
              </tbody>
            </table>
          </Item>
          <Item title="Cocteles">
            <table>
              <tbody>
                <tr className="my-1">
                  <td>
                    <strong>NEGRONI</strong>
                  </td>
                  <td className="pl-10 md:pl-20">$28.000</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>BELLINI</strong>
                  </td>
                  <td className="pl-10 md:pl-20">$26.000</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>IL PADRINO </strong>{' '}
                  </td>
                  <td className="pl-10 md:pl-20">$26.000</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>MARGARITA</strong>
                  </td>
                  <td className="pl-10 md:pl-20">$26.000</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>GIN TONIC</strong>
                  </td>
                  <td className="pl-10 md:pl-20">$25.000</td>
                </tr>
              </tbody>
            </table>
          </Item>
          <Item title="Cafetería">
            <table>
              <tbody>
                <tr className="my-1">
                  <td>
                    <strong>
                      <strong>ESPRESSO</strong>
                    </strong>
                  </td>
                  <td className="pl-10 md:pl-20">$4.500</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>AMERICANO </strong>{' '}
                  </td>
                  <td className="pl-10 md:pl-20">$4.500</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>MACCHIATO</strong>
                  </td>
                  <td className="pl-10 md:pl-20">$5.500</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>LATTE</strong>
                  </td>
                  <td className="pl-10 md:pl-20">$6.000</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>CAPPUCCINO</strong>
                  </td>
                  <td className="pl-10 md:pl-20">$6.500</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>
                      AROMÁTICA DE FRUTOS ROJOS, TROPICAL, JENJIBRE Y PIÑA
                    </strong>
                  </td>
                  <td className="pl-10 md:pl-20">$6.800</td>
                </tr>
              </tbody>
            </table>
          </Item>
        </Section>
      </main>
      <Footer />
    </div>
  );
}

export function Section({ title, color, children }) {
  return (
    <section className={`py-10 flex flex-col gap-4 ${color}`}>
      <h3 className="text-4xl font-title font-semibold text-center">{title}</h3>
      {children}
    </section>
  );
}
export function Item({ title, children }) {
  return (
    <div className="mx-auto max-w-4xl w-full px-4 sm:px-8 border-b-2 pb-10">
      <h3 className="text-3xl font-title font-medium  mt-6 mb-4">{title}</h3>
      {children}
    </div>
  );
}
