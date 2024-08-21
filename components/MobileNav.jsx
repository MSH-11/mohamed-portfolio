"use client";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { Button } from "./ui/button";
import { IoCalendarOutline } from "react-icons/io5";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/** Logo */}
        <div className="mt-32 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Mohamed<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>

        {/** nav */}
        <nav className="mt-20 flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={`${
                  link.path === pathname &&
                  "text-accent border-b-2 border-accent"
                } text-xl capitalize hover:text-accent transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
          <a href="https://calendly.com/hamouda24/15min" className="mt-5">
            <Button
              variant="outline"
              className="uppercase flex items-center gap-3"
            >
              <span>Schedule meeting</span>
              <IoCalendarOutline className="text-xl" />
            </Button>
          </a>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
