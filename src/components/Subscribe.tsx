import React from "react";
import Button from "./Button";
import { cn } from "@/lib/utils";
const Subscribe = ({ className }: { className?: string }) => {
  return (
    <section
      id="contact-us"
      className={cn(
        "max-container flex items-center justify-between gap-10 max-lg:flex-col",
        className
      )}
    >
      <h3 className="font-palanquin text-4xl font-bold leading-[68px] lg:max-w-md">
        Sign Up for
        <span className="text-coral-red"> Updates </span>& Newsletter
      </h3>
      <div className="flex w-full items-center gap-5 rounded-full p-2.5 max-sm:flex-col sm:border sm:border-slate-gray lg:max-w-[40%]">
        <input type="text" placeholder="subscribe@test.com" className="input" />
        <div className="flex items-center max-sm:w-full max-sm:justify-end">
          <Button className="w-full">Sign Up</Button>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
