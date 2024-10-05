//commenting out import to satisfy compile error on vercel
//unused import statement.
//import Image from "next/image";
import Link from "next/link";
import HHLogo from "./ui/hh-logo";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

export default function Landing() {
  return (
    <main
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/hh-landing.jpg')" }}
    >
      <div className="flex flex-col w-full items-start  bg-gray-200 bg-opacity-50 backdrop-blur-md p-4">
        <div className="ml-12">
          <HHLogo />
        </div>
        <div className="ml-[106px] text-lg font-thin italic ms-22">
          <span>Discover Unique Creations, Handcrafted with Love.</span>
        </div>
      </div>
      <div className="py-40 px-10 my-40 min-w-full flex flex-col items-center">
        <Link
          href="/home"
          className="flex items-center gap-5 mx-auto rounded-lg bg-blue-500 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-blue-400 md:text-base"
        >
          <ShoppingBagIcon className="w-5" />
          <span>Start shopping</span>
        </Link>
      </div>
    </main>
  );
}
