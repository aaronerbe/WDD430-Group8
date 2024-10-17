import { merriweather } from "@/app/ui/fonts";

export default function Banner() {
  return (
    <main className="bg-cover bg-center h-72 w-full bg-cyan-900">
      <div className="flex h-full items-center w-1/2">
        <p className={`${merriweather.className} text-slate-200 text-2xl ml-8`}>
          Support small businesses and find handmade gifts for your loved ones!
        </p>
      </div>
    </main>
  );
}
