"use client";

import React, { useEffect, useState } from "react";
import Button from "./Button";
import { statistics, shoes } from "@/constants";
import ShoeCard from "./ShoeCard";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const Hero = ({ className }: { className?: string }) => {
  const [previewImage, setPreviewImage] = useState<string>(shoes[0].image);

  useEffect(() => {
    console.log(previewImage);
  }, [previewImage]);

  return (
    <section
      id="home"
      className={cn(
        " flex min-h-screen w-full flex-col justify-center gap-10 xl:flex-row",
        className
      )}
    >
      <div className="max-xl:padding-x relative flex w-full flex-col items-start justify-center  pt-28 xl:w-2/5">
        <p className="font-montserrat text-xl text-coral-red">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl font-bold max-sm:text-[72px] max-sm:leading-[82px]">
          <span className="relative z-10 pr-10 xl:whitespace-nowrap ">
            The New Arrival
          </span>
          <br />
          <span className="mt-3 inline-block text-coral-red">Nike</span> Shoes
        </h1>
        <p className="pb-14 pt-8 font-montserrat text-lg leading-8 text-slate-gray sm:max-w-sm">
          Discover new stylish arrivals, quality, comfort, and innovation for
          your active life.
        </p>
        <Button className="flex hover:bg-red-400 hover:border-0 cursor-pointer transition-all items-center">
          Shop Now <ArrowRight />
        </Button>

        <div className="mt-20 flex w-full flex-wrap items-start justify-start gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="font-palanquin text-4xl font-bold">{stat.value}</p>
              <p className="font-montserrat leading-7 text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex flex-1 justify-center bg-primary bg-hero bg-cover bg-center max-xl:py-40 xl:min-h-screen">
        <Image
          src={previewImage}
          alt="Shoe collection"
          width={610}
          height={500}
          className="relative z-10 object-contain"
        />

        <div className="absolute bottom-[-5%] flex gap-4 max-sm:px-6 sm:left-[10%] sm:gap-6">
          {shoes.map((shoe, index) => (
            <div
              key={index}
              onClick={() => {
                setPreviewImage(() => shoe.image);
                alert(shoe.image);
              }}
              className="bg-red-200"
            >
              <ShoeCard image={shoe.thumbnail} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
