import React from "react";
import { TEMPLATE } from "./TemplateList";
import Image from "next/image";

const TemplateCard = (t: TEMPLATE) => {
  return (
    <div className="p-5 shadow-md rounded-md border bg-white flex flex-col gap-3 cursor-pointer hover:scale-105 transition-all">
      <Image src={t.icon} alt={t.name} width={50} height={50} unoptimized />
      <h2 className="font-medium text-lg">{t.name}</h2>
      <p className="text-gray-500 line-clamp-3">{t.desc}</p>
    </div>
  );
};

export default TemplateCard;
