import { SparklesIcon } from "@heroicons/react/24/outline";
import { merriweather } from "@/app/ui/fonts";

export default function HHLogo() {
  return (
    <div className={`${merriweather.className} flex flex-row items-center`}>
      <SparklesIcon className="h-12 w-12" color="yellow" />
      <p className={`text-[44px] mx-2 text-neutral-200`}>Handcrafted Haven</p>
    </div>
  );
}

