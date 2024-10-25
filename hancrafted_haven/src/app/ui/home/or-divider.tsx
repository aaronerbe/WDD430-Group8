import { merriweather } from "@/app/ui/fonts";

const OrDivider = () => {
  return (
    <div className="flex items-center justify-center my-6">
      <div className="w-1/4 h-[1px] bg-black"></div>

      <p
        className={`${merriweather.className} text-gray-800 text-3xl italic ms-22 mx-4`}
      >
        or
      </p>
      <div className="w-1/4 h-[1px] bg-black"></div>
    </div>
  );
};

export default OrDivider;
