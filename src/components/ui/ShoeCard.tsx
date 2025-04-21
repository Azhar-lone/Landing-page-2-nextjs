"use client";

import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";
type ShoeCardProps = {
  image: string;
};

const ShoeCard = ({ image }: ShoeCardProps) => {
  return (
    <div className={cn(`rounded-xl border-2 cursor-pointer max-sm:flex-1`)}>
      <div className="centered-flex rounded-xl bg-card bg-cover bg-center max-sm:p-4 sm:size-40">
        <Image
          src={image}
          alt="Shoe collection"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
