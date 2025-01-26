import Image from "next/image";
import ImageZero from "../../images/flower.jpg";
import Link from "next/link";

let Page2 = () => {
  return (
    <div
      className="relative min-h-screen"
      style={{
        backgroundImage: `url(${ImageZero.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      
      <div className="absolute inset-0 flex flex-col items-center justify-center   text-white text-center p-4">
    
        <h1 className="text-4xl md:text-5xl font-bold mb-8">This is Page 2</h1>

        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/page-3">
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors text-lg font-semibold">
              Go to Page 3
            </button>
          </Link>
          <Link href="/">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors text-lg font-semibold">
              Go Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page2;