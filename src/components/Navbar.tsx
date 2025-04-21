import Link from "next/link";
import React from "react";
import { MenuIcon } from "lucide-react";
import { navLinks } from "@/constants";
import { cn } from "@/lib/utils";

const Navbar = ({ className }: { className?: string }) => {
  return (
    <header className={cn(" p-10 absolute z-50 w-full py-8 ", className)}>
      <nav className="max-w-[1440px] flex items-center justify-between">
        <Link href={"/"}>
          <svg
            aria-hidden="true"
            className="w-full h-full transform scale-105"
            focusable="false"
            viewBox="0 0 24 24"
            role="img"
            width="50px"
            height="50px"
            fill="none"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z"
              clipRule="evenodd"
            ></path>
          </svg>
        </Link>

        <ul className="items-center flex gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="z-50 font-montserrat text-lg leading-normal text-slate-gray hover:text-fuchsia-800"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden max-lg:flex">
          <MenuIcon />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
