import { cn } from "@/lib/utils";
import React from "react";

type buttonProps = {
  className?: string;
  children: React.ReactNode;
};

const Button = ({ children, className }: buttonProps) => {
  return (
    <button
      className={cn(
        `centered-flex gap-2 rounded-full border  px-7 py-4 font-montserrat 
        border-coral-red bg-coral-red text-white
    text-lg leading-none hover:shadow-md`,
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
