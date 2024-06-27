"use client";
import React, { useState } from "react";
import { TEMPLATE } from "../../_components/TemplateList";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface PROPS {
  selectedtemplate?: TEMPLATE;
  Userforminput:any
}

const FormSection = ({ selectedtemplate,Userforminput }: PROPS) => {
  const [Formdata, setFormdata] = useState<any>();
  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log(Formdata);
    Userforminput(Formdata);
  };

  const handleinputchange = (e: any) => {
    const { name, value } = e.target;

    setFormdata({ ...Formdata, [name]: value });
  };
  return (
    <div className="p-5  shadow-md border rounded-lg">
      {/* @ts-ignore */}
      <Image
        src={selectedtemplate?.icon}
        alt={selectedtemplate?.name}
        width={70}
        height={70}
        unoptimized
      />
      <h2 className="font-bold text-2xl mb-2 text-primary">
        {selectedtemplate?.name}
      </h2>
      <p className="text-gray-500 text-sm">{selectedtemplate?.desc}</p>
      <form className="mt-6" onSubmit={onSubmit}>
        {selectedtemplate?.form?.map((item, index) => (
          <div className="my-2 flex  flex-col gap-2 mb-7">
            <label className="font-bold">{item.label}</label>
            {item.field == "input" ? (
              <Input
                name={item.name}
                required={item?.required}
                onChange={handleinputchange}
              />
            ) : item.field == "textarea" ? (
              <textarea
                name={item.name}
                required={item?.required}
                onChange={handleinputchange}
                className=""
              />
            ) : null}
          </div>
        ))}
        <Button type="submit" className="w-full py-6">
          Genrate
        </Button>
      </form>
    </div>
  );
};

export default FormSection;
