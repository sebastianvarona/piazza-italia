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
                    <strong>CEVICHE DE CAMARÓN</strong>
                    <br />
                    camarones, jengibre, cebolla morada, zumo de naranjas, salsa
                    de tomate, cilantro, brandy. Burata de búfala, jamón
                    serrano, rueda de tomate, salsa pesto, albahaca, crostini de
                    pan
                  </td>
                  <td className="pl-10 md:pl-20">$39.600</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>MOZZARELLA DE BUFALA</strong>
                    <br />
                    Burata de búfala, jamón serrano, rueda de tomate, salsa
                    pesto, albahaca, crostini de pan
                  </td>
                  <td className="pl-10 md:pl-20">$32.900</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>CROSTINI DE SALMÓN</strong>
                    <br />
                    pan tostado en horno, salmón ahumado, limón, pimienta negra.
                  </td>
                  <td className="pl-10 md:pl-20">$21.900</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>PORTOBELLOS CON QUESO</strong>
                    <br />
                    champiñones, cebolla, ajo, queso ahumado.
                  </td>
                  <td className="pl-10 md:pl-20">$27.200</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>POLPETTINE AL POMODORO</strong>
                    <br />
                    albóndigas de res, huevo, parmesano, leche, perejil, en
                    salsa de tomate.
                  </td>
                  <td className="pl-10 md:pl-20">$21.900</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>BRUSCHETTA NAPOLETANA</strong>
                    <br />
                    pan tostado en horno, tomate, aceite de oliva, orégano,
                    albahaca .
                  </td>
                  <td className="pl-10 md:pl-20">$9.500</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>PAN AL AJO</strong>
                    <br />
                    canasta de caliente pan campesino al horno en mantequilla de
                    ajo.
                  </td>
                  <td className="pl-10 md:pl-20">$9.000</td>
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
                    <strong>ENSALADA CESAR</strong>
                    <br />
                    tiras de pollo, rúcula, lechuga, queso parmesano, aceite de
                    oliva, mozzarella de búfala, aceite balsámico, salsa Dijon,
                    limón, croutons.
                  </td>
                  <td className="pl-10 md:pl-20">$36.200</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>ENSALADA MEDITERRANEA</strong>
                    <br />
                    tomate, atún, aceitunas negras, lechuga, cebolla morada
                    caramelada, pepino, nuez, alcaparras.
                  </td>
                  <td className="pl-10 md:pl-20">$35.200</td>
                </tr>
              </tbody>
            </table>
          </Item>
          <Item title="Pizzas - Pizze">
            <table>
              <tbody>
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
                    <strong>HAWAIANA SUPER</strong>
                    <br />
                    Una base de queso fundido y tomate que se aliñan con jamón,
                    tocineta, piña y cereza.
                  </td>
                  <td className="pl-10 md:pl-20">$40.900</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>MARINERA</strong>
                    <br />
                    camarones, almejas, palmitos de cangrejos, tomate, cebolla,
                    pimienta.
                  </td>
                  <td className="pl-10 md:pl-20">$39.900</td>
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
                    <strong>CALZONE</strong>
                    <br />
                    tocineta, tomate, champiñones, mozzarella, chorizo y ricota.
                  </td>
                  <td className="pl-10 md:pl-20">$39.600</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>PROSCIUTTO</strong>
                    <br />
                    jamón artesanal, queso mozzarella, rúgula.
                  </td>
                  <td className="pl-10 md:pl-20">$37.900</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>PEPPERONI</strong>
                    <br />
                    pepperoni, queso mozzarella, pimienta.
                  </td>
                  <td className="pl-10 md:pl-20">$36.600</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>PORTOBELLO</strong>
                    <br />
                    champiñones portobello, queso ahumado, rúgula y parmesano.
                  </td>
                  <td className="pl-10 md:pl-20">$36.600</td>
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
                    <strong>POLLO CON CHAMPIÑONES</strong>
                    <br />
                    pollo, champiñones, queso fundido
                  </td>
                  <td className="pl-10 md:pl-20">$32.800</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>NAPOLETANA</strong>
                    <br />
                    tomate, queso mozzarella, anchoas, albahaca.
                  </td>
                  <td className="pl-10 md:pl-20">$32.800</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>CAPRESE</strong>
                    <br />
                    tomate cherry, queso mozzarella, pesto.
                  </td>
                  <td className="pl-10 md:pl-20">$31.700</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>MARGHERITA</strong>
                    <br />
                    tomate, queso mozzarella, albahaca.
                  </td>
                  <td className="pl-10 md:pl-20">$28.300</td>
                </tr>
              </tbody>
            </table>
          </Item>
          <Item title="Pasta - Primi Piatti">
            <table>
              <tbody>
                <tr className="my-1">
                  <td>
                    <strong>FETTUCCINE CAMARONES, SALMON Y BRANDY</strong>
                    <br />
                    pasta, camarones, salmón, brandy, pimienta.
                  </td>
                  <td className="pl-10 md:pl-20">$44.500</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>LINGUINE MARINERA</strong>
                    <br />
                    linguini, mejillones, gambas, almejas, calamar, vino blanco,
                    cebolla, ajo, tomate triturado, aceite de oliva y paprica.
                  </td>
                  <td className="pl-10 md:pl-20">$42.800</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>PENNE CAMARONES Y VODKA</strong>
                    <br />
                    Pasta penne, ajo, crema de leche, salsa de tomate, camarones
                    y vodka.
                  </td>
                  <td className="pl-10 md:pl-20">$42.500</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>FETTUCCINE BOSCAIOLA</strong>
                    <br />
                    pasta, portobello, salciccia italiana, papada, tocineta,
                    arveja, tomate y parmesano.
                  </td>
                  <td className="pl-10 md:pl-20">$39.600</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>PAPPARDELLE COSTILLA</strong>
                    <br />
                    pasta pappardella con deliciosa costilla de res, cebolla,
                    tomate cherry, aceite de oliva, vino blanco y queso
                    parmesano.
                  </td>
                  <td className="pl-10 md:pl-20">$39.600</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>PENNETTE 4 QUESOS</strong>
                    <br />
                    pasta penne, mozzarella, queso azul, queso pecorino,
                    parmesano.
                  </td>
                  <td className="pl-10 md:pl-20">$38.600</td>
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
                    <strong>PASTA ALFREDO</strong>
                    <br />
                    pasta fetuccini, mantequilla, crema de leche, queso
                    parmesano, pimienta blanca, nuez moscada.
                  </td>
                  <td className="pl-10 md:pl-20">$33.900</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>PASTA A LA PUTTANESCA</strong>
                    <br />
                    spaghetti, aceite de oliva, ajo, alcaparras, anchovas,
                    aceitunas, tomate.
                  </td>
                  <td className="pl-10 md:pl-20">$34.900</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>SPAGHETTI A LA AMATRICIANA</strong>:
                    <br />
                    pasta, papada de cerdo, tomate, ají, queso pecorino, vino
                    blanco.{' '}
                    <span className="text-red-400">(un poco picante)</span>
                  </td>
                  <td className="pl-10 md:pl-20">$34.000</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>SPAGHETTI CARBONARA</strong>
                    <br />
                    pasta, tocineta ahumada, ajo, huevo, crema de leche.
                  </td>
                  <td className="pl-10 md:pl-20">$33.900</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>PASTA AL BURRO</strong>
                    <br />
                    pasta spaghetti, mantequilla, queso parmesano.
                  </td>
                  <td className="pl-10 md:pl-20">$25.900</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>TAGLIATELLE BOLOGNESA</strong>
                    <br />
                    pasta tagliatelle, carne molida de res, tomate, ajo,
                    cebolla, laurel. parmesano.
                  </td>
                  <td className="pl-10 md:pl-20">$32.800</td>
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
              </tbody>
            </table>
          </Item>
          <Item title="Lasagñas">
            <tr className="my-1">
              <td>
                <strong>LASAGÑA DE CARNE</strong>
                <br />
                pasta para lasaña, carne molida, tomate, cebolla, ajo, albahaca,
                tomate, mozzarella, parmesano.
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
          </Item>
          <Item title="Risotos">
            <tr className="my-1">
              <td>
                <strong>RISOTTO MARINERA</strong>
                <br />
                arroz carnaroli, camarones, calamares, mejillones, pulpo,
                palmitos de cangrejos, vino blanco.
                <br />
                <br />
                Adicionales:
                <br />– Porción de queso parmesano $8.000
              </td>
              <td className="pl-10 md:pl-20">$42.900</td>
            </tr>
            <tr className="my-1">
              <td>
                <strong>RISOTTO PORTOBELLO</strong>
                <br />
                champiñones portobellos, tocineta ahumada, vino blanco,
                parmesano.
              </td>
              <td className="pl-10 md:pl-20">$34.000</td>
            </tr>
          </Item>
          <Item title="Carnes - Secondi Piatti">
            <table>
              <tbody>
                <tr className="my-1">
                  <td>
                    <strong>BABY BEEF</strong>
                    <br />
                    Corte de res proveniente del lomo fino a la plancha y
                    servido con papas al romero e ensalada mista. El corte más
                    fino de la res.
                  </td>
                  <td className="pl-10 md:pl-20">$44.900</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>FILET MIGNON AL VINO</strong>
                    <br />
                    carne de res, tocineta ahumada, ajo, vino tinto.
                  </td>
                  <td className="pl-10 md:pl-20">$43.100</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>SCALOPPINE AL LIMÓN</strong>
                    <br />
                    sutil corte tierno de baby beef, ajo, trigo y limón.
                  </td>
                  <td className="pl-10 md:pl-20">$42.100</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>MEDALLONE DE RES Y CERDO</strong>
                    <br />
                    250gr. de res y cerdo a la plancha y gratinado con queso
                    provola ahumado.
                  </td>
                  <td className="pl-10 md:pl-20">$36.800</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>INVOLTINI DI POLLO</strong>
                    <br />
                    rollos de pollo, parmesano, jamón, perejil, pimienta negra,
                    queso ahumado.
                  </td>
                  <td className="pl-10 md:pl-20">$36.200</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>LOMO DE CERDO AL VINO</strong>
                    <br />
                    ruedas de lomo de cerdo, ajo, cebolla, salsa al vino.
                  </td>
                  <td className="pl-10 md:pl-20">$32.800</td>
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
                    <strong>FILET DE MERO AL LIMÓN</strong>
                    <br />
                    Pargo rojo a la plancha en salsa de camarones y mixtura.
                  </td>
                  <td className="pl-10 md:pl-20">$42.500</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>SALMÓN AL BRANDY</strong>
                    <br />
                    salmón, ajo, brandy y aceite de oliva.
                  </td>
                  <td className="pl-10 md:pl-20">$42.900</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>SALMON AL VINO BLANCO</strong>
                    <br />
                    salmón, vino blanco y aceite de oliva.
                  </td>
                  <td className="pl-10 md:pl-20">$40.900</td>
                </tr>
              </tbody>
            </table>
          </Item>
        </Section>
        <Section title="Bebidas" color="white">
          <Item title="Gaseosas">
            <table>
              <tbody>
                <tr className="my-1">
                  <td>
                    <strong>
                      COCA-COLA * COCA-COLA ZERO * GINGER * POSTOBÓN
                    </strong>
                  </td>
                  <td className="pl-10 md:pl-20">$6.500</td>
                </tr>
              </tbody>
            </table>
          </Item>
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
                    <strong>MANGO BICHE</strong>
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
                      JARRA <strong>NATURAL</strong>
                    </strong>
                  </td>
                  <td className="pl-10 md:pl-20"> $15.000 </td>
                </tr>
              </tbody>
            </table>
          </Item>
          <Item title="Jugos">
            <table>
              <tbody>
                <tr className="my-1">
                  <td>
                    <strong>
                      MORA - MARACUYA - GUANABANA - LULO - MANGO - FRESA
                    </strong>
                  </td>
                  <td className="pl-10 md:pl-20">
                    Agua: $8.000 | Leche: $9.000
                  </td>
                </tr>
              </tbody>
            </table>
          </Item>
          <Item title="Aguas">
            <table>
              <tbody>
                <tr className="my-1">
                  <td>
                    <strong>AGUA CON GAS Y SIN GAS</strong>
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
          <Item title="Licores">
            <table>
              <tbody>
                <tr className="my-1">
                  <td>
                    <strong>AGUARDIENTE ANTIOQUEÑO BOTELLA</strong>
                  </td>
                  <td className="pl-10 md:pl-20">$80.000</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>WISKY 12 AÑOS</strong> (CHIVAS, BUCCANAS, OLD PAR)
                  </td>
                  <td className="pl-10 md:pl-20">$250.000</td>
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
                  <td className="pl-10 md:pl-20">$12.000</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>CORONA</strong>
                  </td>
                  <td className="pl-10 md:pl-20">$12.000</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>CLUB COLOMBIA</strong> (DORADA, NEGRA, ROJA)
                  </td>
                  <td className="pl-10 md:pl-20">$9.000</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>AGUILA LIGHT</strong>
                  </td>
                  <td className="pl-10 md:pl-20">$9.000</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>CORONITA</strong>
                  </td>
                  <td className="pl-10 md:pl-20">$6.000</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>POKER EN LATA</strong>
                  </td>
                  <td className="pl-10 md:pl-20">$8.000</td>
                </tr>
              </tbody>
            </table>
          </Item>
        </Section>
        <Section title="Vinos" color={'bg-gray-100'}>
          <Item title="Tintos">
            <table>
              <tbody>
                <tr className="my-1">
                  <td>
                    <strong>ARIONE MERLOT</strong>
                  </td>
                  <td className="pl-10 md:pl-20">$90.000</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>ARIONE ROSSO </strong>
                  </td>
                  <td className="pl-10 md:pl-20">$75.000</td>
                </tr>
              </tbody>
            </table>
          </Item>
          <Item title="Blanco">
            <table>
              <tbody>
                <tr className="my-1">
                  <td>
                    <strong>Arione Piemonte Chardonnay Doc</strong>
                  </td>
                  <td className="pl-10 md:pl-20">$95.000</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>ARIONE BLANCO</strong>
                  </td>
                  <td className="pl-10 md:pl-20">$55.000</td>
                </tr>
              </tbody>
            </table>
          </Item>
          <Item title="Rosados">
            <table>
              <tbody>
                <tr className="my-1">
                  <td>
                    <strong>ARIONE PIEMONTE E BARBERA D´ASTI DOC</strong>
                  </td>
                  <td className="pl-10 md:pl-20">$105.000</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>ARIONE NERO D’AVOLA</strong>
                  </td>
                  <td className="pl-10 md:pl-20">$95.000</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>ARIONE CABERNET</strong>
                  </td>
                  <td className="pl-10 md:pl-20">$90.000</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>TORREVILLA PINOT NERO DOP</strong>
                  </td>
                  <td className="pl-10 md:pl-20">$90.000</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>TORREVILLA BARBERA DOP</strong>
                  </td>
                  <td className="pl-10 md:pl-20">$90.000</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>ARIONE SHIRAZ</strong>
                  </td>
                  <td className="pl-10 md:pl-20">$90.000</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>ARIONE ROSSATO</strong>
                  </td>
                  <td className="pl-10 md:pl-20">$75.000</td>
                </tr>
              </tbody>
            </table>
          </Item>
          <Item title="Espumosos">
            <table>
              <tbody>
                <tr className="my-1">
                  <td>
                    <strong>PROSECCO MIONETTO BRUT DOC</strong>
                  </td>
                  <td className="pl-10 md:pl-20">$130.000</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>LAMBRUSCO ROSSO IGT</strong>
                  </td>
                  <td className="pl-10 md:pl-20">$85.000</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>LAMBRUSCO BLANCO IGT</strong>
                  </td>
                  <td className="pl-10 md:pl-20">$85.000</td>
                </tr>
              </tbody>
            </table>
          </Item>
          <Item title="Sangrías">
            <table>
              <tbody>
                <tr className="my-1">
                  <td>
                    <strong>JARRA DE SANGRÍA BLANCA, ROSADA O TINTA</strong>
                  </td>
                  <td className="pl-10 md:pl-20">$90.000</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>COPA DE SANGRÍA</strong>
                  </td>
                  <td className="pl-10 md:pl-20">$20.000</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>COPA DE VINO ARIONE BLANCO, ROSSATO Y ROSSO</strong>
                  </td>
                  <td className="pl-10 md:pl-20">$20.000</td>
                </tr>
              </tbody>
            </table>
          </Item>
        </Section>
        <Section title="Cafetería" color="white">
          <Item title="Cafes">
            <table>
              <tbody>
                <tr className="my-1">
                  <td>
                    <strong>ESPRESSO</strong>
                  </td>
                  <td className="pl-10 md:pl-20">$4.500</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>AMERICANO </strong>
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
                    <strong>AROMÁTICA</strong> (FRUTOS ROJOS, TROPICAL, JENJIBRE
                    Y PIÑA)
                  </td>
                  <td className="pl-10 md:pl-20">$6.800</td>
                </tr>
              </tbody>
            </table>
          </Item>
          <Item title="Pastelería">
            <table>
              <tbody>
                <tr className="my-1">
                  <td>
                    <strong>GENOVESA</strong>
                  </td>
                  <td className="pl-10 md:pl-20">$8.500</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>MARACUYÁ</strong>
                  </td>
                  <td className="pl-10 md:pl-20">$8.500</td>
                </tr>
                <tr className="my-1">
                  <td>
                    <strong>CHOCOLATE</strong>
                  </td>
                  <td className="pl-10 md:pl-20">$8.500</td>
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
      <h3 className="text-4xl font-semibold text-center font-title">{title}</h3>
      {children}
    </section>
  );
}
export function Item({ title, children }) {
  return (
    <div className="w-full max-w-4xl px-4 pb-10 mx-auto border-b-2 sm:px-8">
      <h3 className="mt-6 mb-4 text-3xl font-medium font-title">{title}</h3>
      {children}
    </div>
  );
}
