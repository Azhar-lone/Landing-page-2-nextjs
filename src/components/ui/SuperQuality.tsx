import React from "react";
import Button from "./Button";
import Image from "next/image";
import { cn } from "@/lib/utils";
const SuperQuality = ({ className }: { className?: string }) => {
  return (
    <section
      id="about-us"
      className={cn(
        " flex w-full items-center justify-between gap-10 max-lg:flex-col",
        className
      )}
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl font-bold capitalize lg:max-w-lg">
          We Provide You <span className="text-coral-red">Super </span>
          <span className="text-coral-red">Quality</span> Shoes
        </h2>
        <p className="info-text mt-4 lg:max-w-lg">
          Ensuring premium comfort and style, our meticiously crafted footware
          is designed to elevate your experience, providing you with unmatched
          quality, and a touch of elegance.
        </p>
        <p className="info-text mt-6 lg:max-w-lg">
          Our dedication to detail and execellence ensures your satisfaction.
        </p>
        <div className="mt-11">
          <Button>View Details</Button>
        </div>
      </div>

      <div className="centered-flex flex-1">
        <Image
          src={"/images/shoe8.svg"}
          alt="Shoe 8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
