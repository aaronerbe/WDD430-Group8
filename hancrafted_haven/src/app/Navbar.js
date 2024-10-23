"use client";

import Link from "next/link";
import { UserCircleIcon } from '@heroicons/react/24/outline';
import Search from '@/app/ui/search';

export default function Header() {

	return <header className="navbar">
		<div className="py-3 bg-gray-500">
			<div className="container sm:flex justify-between items-center">
				<div className="px-2">
                    <Link href="/">Home</Link>
                </div>
                <Search placeholder="Find a product..." />
                <div className="px-2">
                    <UserCircleIcon className="h-[24px] w-[24px] -translate-x-1 -translate-y-1" />
                </div>
            </div>
        </div>
	</header>;
}