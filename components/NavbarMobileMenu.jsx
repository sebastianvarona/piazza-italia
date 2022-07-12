import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from '../features/menu/menuSlice';

const items = [
  {
    path: '/',
    name: 'Inicio',
  },
  {
    path: '/carta',
    name: 'Carta',
  },
  {
    path: '/galeria',
    name: 'Galería',
  },
  {
    path: '/reservas',
    name: 'Reservar',
  },
];

export default function NavbarMobileMenu() {
  const menu = useSelector((state) => state.menu.active);
  const dispatch = useDispatch();

  return (
    <div
      style={{ zIndex: 51 }}
      className={`fixed top-0 left-0 w-full h-screen py-8 bg-white ${
        menu ? '' : 'hidden'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8 flex justify-between items-center">
        <Link href={'/'}>
          <img
            src="/logo.svg"
            alt="Piazza Italia Logo"
            className="h-20 md:h-24 relative cursor-pointer"
          />
        </Link>
        {/* Mobile menu */}
        <div className="flex">
          <button
            onClick={() => {
              dispatch(toggle());
            }}
            className="text-md flex gap-2 font-semibold w-full text-center active:bg-red-400 p-3"
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
      <div className="pt-12">
        <ul className="flex flex-col gap-5 items-center">
          {items.map((item) => {
            return (
              <li
                onClick={() => {
                  dispatch(toggle());
                }}
                className="text-xl font-semibold w-full text-center active:bg-black/10 py-2"
              >
                <Link href={item.path}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
