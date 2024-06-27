"use client";
import React from "react";
import FormSection from "../_components/FormSection";
import RichTextedior from "../_components/RichTextedior";
import { TEMPLATE } from "../../_components/TemplateList";
import Templates from "@/app/(data)/Templates";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface PROPS {
  params: {
    "template-slug": string;
  };
}

const CreateNewContent = (props: PROPS) => {
  const selectedtemplate: TEMPLATE | undefined = Templates?.find(
    (item) => item.slug == props.params["template-slug"]
  );

  const GenrateAIcontent = (Formdata: any) => {};
  return (
    <div className="p-10">
      <Link href={"/dashbaord"}>
        <Button className="">
          {" "}
          <ArrowLeft /> Back
        </Button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 py-5">
        {/* formsection */}
        <FormSection
          Userforminput={(v: any) => GenrateAIcontent(v)}
          selectedtemplate={selectedtemplate}
        />

        {/* rich text editor section */}
        <div className="col-span-2">
          <RichTextedior />
        </div>
      </div>
    </div>
  );
};

export default CreateNewContent;
