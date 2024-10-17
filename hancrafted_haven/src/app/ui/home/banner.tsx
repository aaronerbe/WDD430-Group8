import { merriweather } from "@/app/ui/fonts";
import HHLogo from "../hh-logo";

export default function Banner() {
  return (
    <main
      className="bg-cover bg-center h-56 md:h-96 w-full"
      style={{ backgroundImage: "url('/hh-landing.jpg')" }}
    >
      <div className="flex flex-col w-full items-start  bg-zinc-950 bg-opacity-50 backdrop-blur-md p-4">
        <div className="md:ml-12 mb-[-10px]">
          <HHLogo />
        </div>
        <div className="ml-[58px] md:ml-[106px] text-lg font-thin italic ms-22">
          <span>Discover Unique Creations, Handcrafted with Love.</span>
        </div>
      </div>
    </main>
  );
}
