import Form from "../ui/products/create-form";
import { merriweather } from "@/app/ui/fonts";

export default async function Page() {
  return (
    <main className="flex justify-center m-2">
      <div className="max-w-xl w-full">
        <div className={`${merriweather.className} text-xl mt-8 ml-6`}>
          <h3>Add a new product:</h3>
        </div>
        <div className="w-full h-[1px] bg-gray-800 mt-4"></div>
        <Form authenticatedUserId={0}/>
      </div>
    </main>
  );
}
