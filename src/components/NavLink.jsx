import Link from "next/link";
import React from "react";
import { Roboto_Mono } from "next/font/google";

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className={`text-[#ADB7BE] hover:text-white block py-2 pl-3 pr-4 sm:text=xl rounded md:p-0 ${roboto_mono.className}`}
    >
      {title}
    </Link>
  );
};

export default NavLink;
