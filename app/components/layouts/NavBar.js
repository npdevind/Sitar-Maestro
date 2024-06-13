"use client";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuBurger } from "react-icons/ci";
import { GiGuitarHead } from "react-icons/gi";

const NavBar = ({ handleClick }) => {
  const pathName = usePathname();
  return (
    <header className="flex items-center justify-between h-16 px-4 md:px-6 bg-white dark:bg-gray-950 shadow">
      <Link
        href="/"
        className="flex items-center gap-2 text-lg font-semibold"
        prefetch={false}
      >
        <GiGuitarHead className="w-6 h-6 " />
        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Sitar Maestro
        </span>
      </Link>
      <nav className="hidden md:flex items-center gap-6 text-sm font-medium ">
        <Link
          href="#"
          className="text-gray-900 hover:text-gray-700 dark:text-gray-50 dark:hover:text-gray-300"
          prefetch={false}
        >
          Home
        </Link>
        <Link
          href="#"
          className="text-gray-900 hover:text-gray-700 dark:text-gray-50 dark:hover:text-gray-300"
          prefetch={false}
        >
          About
        </Link>
        <Link
          href="#"
          className="text-gray-900 hover:text-gray-700 dark:text-gray-50 dark:hover:text-gray-300"
          prefetch={false}
        >
          Services
        </Link>
        <Link
          href="/gallery"
          className="text-gray-900 hover:text-gray-700 dark:text-gray-50 dark:hover:text-gray-300"
          prefetch={false}
        >
          Gallery
        </Link>
        <Link
          href="#"
          className="bg-blue-600 p-1.5 text-white rounded-sm"
          prefetch={false}
          onClick={handleClick}
        >
          Contact Us
        </Link>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden border-0">
            <CiMenuBurger className="w-6 h-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <div className="grid gap-6 p-6">
            <Link
              href="#"
              className="text-gray-900 hover:text-gray-700 dark:text-gray-50 dark:hover:text-gray-300"
              prefetch={false}
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-gray-900 hover:text-gray-700 dark:text-gray-50 dark:hover:text-gray-300"
              prefetch={false}
            >
              About
            </Link>
            <Link
              href="#"
              className="text-gray-900 hover:text-gray-700 dark:text-gray-50 dark:hover:text-gray-300"
              prefetch={false}
            >
              Services
            </Link>
            <Link
              href="#"
              className="text-gray-900 hover:text-gray-700 dark:text-gray-50 dark:hover:text-gray-300"
              prefetch={false}
            >
              Gallery
            </Link>
            <Link
              href="#"
              className="text-gray-900 hover:text-gray-700 dark:text-gray-50 dark:hover:text-gray-300"
              prefetch={false}
            >
              Contact Us
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default NavBar;
