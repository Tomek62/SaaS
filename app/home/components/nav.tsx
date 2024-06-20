import { getSession } from "@/lib/auth";
import { Dialog } from "@headlessui/react";
import { Menu, ArrowBigDownDash } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default async function Nav() {
  const navigation = [
    { name: "Accueil", href: "#" },
    { name: "Demo", href: "#" },
    { name: "Plans", href: "#" },
    { name: "Contact", href: "#" },
  ];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="absolute inset-x-0 top-0 z-50">
            <nav
              className="flex items-center justify-between p-6 lg:px-8"
              aria-label="Global"
            >
              <div className="flex lg:flex-1">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                <Image src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" width={100} height={100} alt="logo"/>
                </a>
              </div>
              <div className="flex lg:hidden">
                <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <span className="sr-only">Open main menu</span>
                  <Menu aria-hidden="true" />
                </button>
              </div>
              <div className="hidden lg:flex lg:gap-x-12">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Log in <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </nav>
            <Dialog
              className="lg:hidden"
              open={mobileMenuOpen}
              onClose={setMobileMenuOpen}
            >
              <div className="fixed inset-0 z-50" />

              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <Image src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" width={100} height={100} alt="logo"/>
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <ArrowBigDownDash size={24} />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6">
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </Dialog>
          </header>
    // <div className="navbar md:px-20 ">
    //   <div className="navbar-start">
    //     <div className="dropdown">
    //       <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="h-5 w-5"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d="M4 6h16M4 12h8m-8 6h16"
    //           />
    //         </svg>
    //       </div>
    //       <ul
    //         tabIndex={0}
    //         className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
    //       >
    //         <li>
    //           <a>Accueil</a>
    //         </li>
    //         <li>
    //           <a>Plans</a>
    //           <ul className="p-2">
    //             <li>
    //               <a>Basic</a>
    //             </li>
    //             <li>
    //               <a>Prenium</a>
    //             </li>
    //           </ul>
    //         </li>
    //         <li>
    //           <a>Demos</a>
    //         </li>
    //         <li>
    //           <a>Contact</a>
    //         </li>
    //         <li>
    //           <a>A propos de nous</a>
    //         </li>
    //       </ul>
    //     </div>
    //     <a className="btn btn-ghost text-xl font-bold text-light-brand-emphasis md:text-title">
    //       FoodPoint
    //     </a>
    //   </div>
    //   <div className="navbar-center hidden items-center font-bold text-black  lg:flex">
    //     <ul className="menu menu-horizontal px-1 text-lg">
    //       <li>
    //         <a>Accueil</a>
    //       </li>
    //       <li>
    //         <details>
    //           <summary>Plans</summary>
    //           <ul className="p-2">
    //             <li>
    //               <a>Basic</a>
    //             </li>
    //             <li>
    //               <a>Prenium</a>
    //             </li>
    //           </ul>
    //         </details>
    //       </li>
    //       <li>
    //         <a>Demos</a>
    //       </li>
    //       <li>
    //         <a>Contact</a>
    //       </li>
    //       <li>
    //         <a>A propos de nous</a>
    //       </li>
    //     </ul>
    //   </div>
    //   {session ? (
    //     <>
    //     <a>{session.user.name}</a>
    //     </>
    //   ) : (
    //     <>
    //       <div className="navbar-end">
    //         <a
    //           className="mr-6 cursor-pointer font-bold text-black"
    //           href="http://app.localhost:3000/login"
    //         >
    //           Login
    //         </a>
    //         <a className="btn btn-sm text-light-brand-inverted">Sign Up</a>
    //       </div>
    //     </>
    //   )}
    // </div>
  );
}
