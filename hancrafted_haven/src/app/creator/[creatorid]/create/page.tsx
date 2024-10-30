import Form from "../../../ui/products/create-form";
import { merriweather } from "@/app/ui/fonts";
import { getUserByEmail } from '@/app/lib/data'
import { User } from "@/app/lib/definitions";
import {auth} from "@/auth";
import { notFound } from "next/navigation";




interface Params {
  params: {
    creatorid: number;
  };
}

export default async function Page({ params }: Params) {
  const { creatorid } = params;


  const session = await auth();
  let authUserId = -1;

  if (session?.user?.email) {
    const userData: User | null = await getUserByEmail(session.user.email);
    if (userData) {
      authUserId = userData.id;
    }
  }
  
  if (Number(authUserId) === -1 || Number(authUserId) !== Number(creatorid)) {
    return notFound(); // Redirect to 404 if unauthorized
  }


  return (
    <main className="flex justify-center m-2">
      <div className="max-w-xl w-full">
        <div className={`${merriweather.className} text-xl mt-8 ml-6`}>
          <h3>Add a new product:</h3>
        </div>
        <div className="w-full h-[1px] bg-gray-800 mt-4"></div>
        <Form authenticatedUserId={creatorid} />
      </div>
    </main>
  );
}
