import Image from "next/image";
import MainImage from "../images/main.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div
      className="relative min-h-screen"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${MainImage.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
     >
      <div className="relative z-10 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
         
        <h1 className="text-red-500 text-4xl font-bold">This is the main page</h1>

        {/* Buttons for navigation */}
        <div className="flex gap-4">
          <Link href="/page-2">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
              Go to Page 2
            </button>
          </Link>
          <Link href="/page-3">
            <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors">
              Go to Page 3
            </button>
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}