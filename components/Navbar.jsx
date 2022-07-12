import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { toggle } from '../features/menu/menuSlice';

export default function Navbar() {
  // const menu = useSelector((state) => state.menu.active);
  const dispatch = useDispatch();

  return (
    <nav className="absolute z-50 top-0 left-0 w-full py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 flex justify-between items-center">
        <Link href={'/'}>
          <img
            src="/logo.svg"
            alt="Piazza Italia Logo"
            className="h-20 md:h-24 relative cursor-pointer"
          />
        </Link>
        <ul className="uppercase text-sm font-semibold text-white gap-8 items-center hidden sm:flex">
          <li>
            <Link href="/">Inicio</Link>
          </li>
          <li>
            <Link href="/carta">Carta</Link>
          </li>
          <li>
            <Link href="/galeria">Galería</Link>
          </li>
        </ul>
        <div className="hidden sm:flex">
          <button className="bg-white text-sm rounded-lg font-semibold p-3 inline-block">
            <Link href="/reservas">Reservar</Link>
          </button>
        </div>
        {/* Mobile menu */}
        <div className="flex sm:hidden">
          <button
            onClick={() => {
              dispatch(toggle());
            }}
            className="text-md flex gap-2 text-white font-semibold p-3"
          >
            Menu{' '}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
