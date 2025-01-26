import Link from "next/link";
import Sunset from "../../images/sunset.jpg";

let Page3 = () => {
  return (
    <div
      className="relative min-h-screen"
      style={{
        backgroundImage: `url(${Sunset.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
    
      <div className="absolute inset-0 flex flex-col items-center justify-center   text-white text-center p-4">
        
        <h1 className="text-4xl md:text-5xl font-bold mb-8">This is Page 3</h1>

         
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/page-2">
          <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-full hover:from-blue-600 hover:to-blue-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl text-lg font-semibold">
              Go to Page 2
            </button>
          </Link>
          <Link href="/">
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors text-lg font-semibold">
              Go Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page3;