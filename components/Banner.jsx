import Image from 'next/image';

export default function Banner({ title, url }) {
  return (
    <div
      className="flex justify-center items-center relative bg-no-repeat bg-cover bg-center h-[55vh]"
      style={{ backgroundImage: `url(${url})` }}
    >
      <h1 className="text-6xl sm:text-7xl pt-24 font-title text-center font-medium text-white	absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center">
        {title}
      </h1>
    </div>
  );
}
