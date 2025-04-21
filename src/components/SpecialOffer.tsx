import React from "react";
import Button from "./Button";
import Image from "next/image";
import { offer } from "../../public/images";
import { ArrowRightIcon } from "lucide-react";

const SpecialOffer = () => {
  return (
    <section className="max-container centered-flex gap-10 max-xl:flex-col-reverse">
      <div className="flex flex-1">
        <Image
          src={offer}
          alt="Offer"
          width={773}
          height={687}
          className="w-full object-contain"
        />
      </div>

      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl font-bold capitalize lg:max-w-lg">
          <span className="text-coral-red">Special </span> Offer
        </h2>
        <p className="info-text mt-4">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="info-text mt-6">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button>
            Shop Now
            <ArrowRightIcon />
          </Button>

          <Button classNames="bg-white border-slate-gray text-slate-gray">
            Learn More
            <ArrowRightIcon />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
