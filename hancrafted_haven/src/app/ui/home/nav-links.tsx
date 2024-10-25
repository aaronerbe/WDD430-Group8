"use client";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Login", href: "/login" },
];

const NavLinks = () => {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex gap-2 rounded-md p-3 text-sm font-medium text-slate-900 hover:bg-slate-200 hover:text-slate-900 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-slate-200 text-slate-900": pathname === link.href,
              }
            )}
          >
            <p>{link.name}</p>
          </Link>
        );
      })}
    </>
  );
};

export default NavLinks;
