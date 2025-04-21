import React from "react";
import { LucideIcon } from "lucide-react";

type ServiceCardProps = {
  Icon: LucideIcon;
  label: string;
  subtext: string;
};

const ServiceCard = ({ Icon, label, subtext }: ServiceCardProps) => {
  return (
    <div className="flex w-full flex-1 flex-col rounded-[20px] px-10 py-16 shadow-3xl sm:w-[350px] sm:min-w-[350px]">
      <div className="centered-flex size-11 rounded-full bg-coral-red">
        <Icon width={24} height={24} />
      </div>

      <h3 className="mt-5 font-palanquin text-3xl font-bold leading-normal">
        {label}
      </h3>
      <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
