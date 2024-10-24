// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { MagnifyingGlassIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import Link from "next/link";
import { UserCircleIcon } from '@heroicons/react/24/outline';
import Search from '@/app/ui/search';
import {Suspense} from 'react';

// export default function Header() {

//     const [openMenu, setOpenMenu] = useState(false);

// 	return <header className="navbar">
// 		<div className="py-3 bg-gray-500">
// 			<div className="container sm:flex justify-between items-center">
// 				<div className="px-2">
//                     <Link href="/">Home</Link>
//                 </div>
//                 <div className="px-2 relative">
//                     <button
//                         onClick={() => setOpenMenu(!openMenu)}
//                         className=""
//                         >
//                         Menu
//                     </button>
//                     {openMenu && (
//                     <div className="left-0 mt-2 w-40 shadow-lg rounded-lg">
//                         <ul className="py-1">
//                         <li className="px-4 py-2">
//                             <Link href="/about">Category 1</Link>
//                         </li>
//                         <li className="px-4 py-2">
//                             <Link href="/services">Category 2</Link>
//                         </li>
//                         <li className="px-4 py-2">
//                             <Link href="/contact">Category 3</Link>
//                         </li>
//                         </ul>
//                     </div>
//                     )}
//                 </div>
//                 <div className="w-full sm-w-[300px] px-2 relative">
//                     <input
//                         className="border-b rounded-lg w-full"
//                         type="text"
//                         placeholder="This is just a placeholder"
//                     />
//                     <MagnifyingGlassIcon className="h-[18px] w-[18px] -translate-x-1 -translate-y-5 text-gray-500 peer-focus:text-gray-900" />
//                 </div>
//                 <div className="px-2">
//                     <UserCircleIcon className="h-[24px] w-[24px] -translate-x-1 -translate-y-1" />
//                 </div>
//             </div>
//         </div>
// 	</header>;
// }
	return <header className="navbar">
		<div className="py-3 bg-gray-500">
			<div className="container sm:flex justify-between items-center">
				<div className="px-2">
                    <Link href="/">Home</Link>
                </div>
                <Suspense fallback={<div>Loading...</div>}>
                    <Search placeholder="Find a product..." />
                </Suspense>

                <div className="px-2">
                    <UserCircleIcon className="h-[24px] w-[24px] -translate-x-1 -translate-y-1" />
                </div>
            </div>
        </div>
	</header>;
}
