import Templates from "@/app/(data)/Templates";
import React from "react";
import TemplateCard from "./TemplateCard";

export interface TEMPLATE {
  name: string;
  desc: string;
  category: string;
  icon: string;
  aiprompt: string;
  slug: string;
  form?: any[];
}

export interface FORM {
  label: string;
  field: string;
  name: string;
  required?: boolean;
}

const TemplateList = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-8">
      {Templates.map((t: TEMPLATE, i: number) => (
        <TemplateCard {...t} />
      ))}
    </div>
  );
};

export default TemplateList;
