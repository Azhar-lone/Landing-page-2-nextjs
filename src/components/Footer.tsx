import { footerLinks, socialMedia } from "@/constants";
import { CopyrightIcon } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="max-w-[1440px] p-6">
      <div className="ma-lg:flex-col flex flex-wrap items-start justify-between gap-20">
        <div className="flex flex-col items-start">
          <Link href="/">
            <Image
              src={"/images/footer-logo.svg"}
              width={150}
              height={46}
              alt="logo footer"
            />
          </Link>
          <p className="mt-6 font-montserrat text-base leading-7 text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike Store. Find
            your best shoes in store. Get rewards.
          </p>
          <div className="mt-8 flex items-center gap-5">
            {socialMedia.map(({ Icon }, index) => (
              <div key={index} className=" p-4 rounded-full bg-slate-200 ">
                <Icon width={24} height={24} color="black"/>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 flex-wrap justify-between gap-20 lg:gap-10">
          {footerLinks.map((section) => (
            <div key={section.title} className="">
              <h4 className="mb-6 font-montserrat text-2xl font-medium leading-normal text-white">
                {section.title}
              </h4>

              <ul>
                {section.links.map((link) => (
                  <li
                    key={link.name}
                    className="mt-3 cursor-pointer font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray"
                  >
                    <Link href={link.link}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-24 flex justify-between text-white-400 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 cursor-pointer items-center justify-start gap-2 font-montserrat">
          <CopyrightIcon width={24} height={24} />

          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="cursor-pointer font-montserrat">Term & Conditions.</p>
      </div>
    </footer>
  );
};

export default Footer;
