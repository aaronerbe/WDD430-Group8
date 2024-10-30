import {
  Disclosure,
  DisclosureButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import NavLinks from "./nav-links";
import MobileNavLinks from "./mobile-nav-links";
//import { UserCircleIcon } from "@heroicons/react/24/outline";
import SmHHLogo from "../sm-hh-logo";
import { signOut } from "@/auth";
import { signIn } from "@/auth";
import UserAvatar from "@/app/components/UserAvatar";
import Btn from "../update-type-btn";
import { auth } from "@/auth";
import { getUserByEmail } from "@/app/lib/data";
import { User } from "@/app/lib/definitions";

export default async function Navbar() {
  const session = await auth();

  //new session logic
  let authUserId: number = -1;
  let userType: string = "";
  if (session && session.user && session.user.email) {
    const userData: User | null = await getUserByEmail(session.user.email);

    if (userData) {
      authUserId = userData.id;
      userType = userData.type;
    }
  }

  return (
    <Disclosure as="nav" className="border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="">
              <SmHHLogo />
            </div>
            <div className="hidden sm:ml-6 sm:block m-auto">
              <div className="flex space-x-4">
                <NavLinks />
              </div>
            </div>
            <div className="flex flex-shrink-0 items-center"></div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Profile dropdown */}
            {userType === "user" && <Btn authenticatedUserId={authUserId} />}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full text-sm focus:outline-none ">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  {/*<UserCircleIcon className="h-8 w-8" />*/}
                  <div className="h-8 w-8">
                    <UserAvatar />
                  </div>
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  {authUserId === -1 ? (
                    <form
                      action={async () => {
                        "use server";
                        await signIn();
                      }}
                    >
                      <button type="submit">Sign in</button>
                    </form>
                  ) : (
                    <a
                      href={`/creator/${authUserId}`}
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-slate-200"
                    >
                      Your Profile
                    </a>
                  )}
                </MenuItem>
                {/*<MenuItem>
                  
                </MenuItem>*/}
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-slate-200"
                  >
                    Settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <form
                    action={async () => {
                      "use server";
                      await signOut();
                    }}
                  >
                    <button type="submit">Sign Out</button>
                  </form>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>
      <MobileNavLinks />
    </Disclosure>
  );
}
