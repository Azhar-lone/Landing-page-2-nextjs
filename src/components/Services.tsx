import { services } from "@/constants";
import React from "react";
import ServiceCard from "./ServiceCard";
import { cn } from "@/lib/utils";
const Services = ({ className }: { className?: string }) => {
  return (
    <section
      className={cn(
        "max-w-[1440px] flex flex-wrap justify-center gap-9",
        className
      )}
    >
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  );
};

export default Services;
