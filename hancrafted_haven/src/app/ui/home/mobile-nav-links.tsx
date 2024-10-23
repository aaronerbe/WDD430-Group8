"use client";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

const links = [
  { name: "Home", href: "/home" },
  { name: "Categories", href: "/categories" },
];

const MobileNavLinks = () => {
  const pathname = usePathname();

  return (
    <DisclosurePanel className="sm:hidden">
      <div className="space-y-1 px-2 pb-3 pt-2">
        {links.map((link) => (
          <DisclosureButton
            key={link.name}
            as="a"
            href={link.href}
            className={clsx(
              "flex gap-2 rounded-md p-3 text-sm font-medium text-slate-900 hover:bg-gray-100 hover:text-slate-900 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-gray-100 text-slate-900": pathname === link.href,
              }
            )}
          >
            {link.name}
          </DisclosureButton>
        ))}
      </div>
    </DisclosurePanel>
  );
};

export default MobileNavLinks;
