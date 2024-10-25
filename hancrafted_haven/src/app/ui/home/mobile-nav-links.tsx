"use client";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { DisclosureButton, DisclosurePanel } from "@headlessui/react";

const links = [
  { name: "Home", href: "/home" },
  { name: "Products", href: "/products" },
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
              "flex gap-2 rounded-md p-3 text-sm font-medium text-slate-900 hover:bg-slate-200 hover:text-slate-900 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-slate-200 text-slate-900": pathname === link.href,
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
