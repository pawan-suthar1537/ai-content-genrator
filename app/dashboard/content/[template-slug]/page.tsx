"use client";
import React, { useState } from "react";
import FormSection from "../_components/FormSection";
import RichTextedior from "../_components/RichTextedior";
import { TEMPLATE } from "../../_components/TemplateList";
import Templates from "@/app/(data)/Templates";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { chatSession } from "@/utils/Aimodel";
import { db } from "@/utils/DB";
import { AIOutput } from "@/utils/Schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment";

interface PROPS {
  params: {
    "template-slug": string;
  };
}

const CreateNewContent = (props: PROPS) => {
  const { user } = useUser();
  const selectedtemplate: TEMPLATE | undefined = Templates?.find(
    (item) => item.slug == props.params["template-slug"]
  );
  const [loading, setloading] = useState(false);
  const [aioutput, setaioutput] = useState<string>("");

  const GenrateAIcontent = async (Formdata: any) => {
    setloading(true);
    const selectedprompt = selectedtemplate?.aiprompt;
    const final = JSON.stringify(Formdata) + "," + selectedprompt;
    const result = await chatSession.sendMessage(final);
    const responseText = await result.response.text();
    setaioutput(responseText);
    await saveInDB(JSON.stringify(Formdata), selectedtemplate?.slug, aioutput);
    console.log(responseText);
    setloading(false);
  };

  const saveInDB = async (
    formData: string,
    slug: any | undefined,
    aiRes: string
  ) => {
    if (!slug) {
      console.error("Template slug is undefined");
      return;
    }

    const result = await db.insert(AIOutput).values({
      formData: formData,
      templateslug: slug,
      aires: aiRes,
      createdBy: user?.primaryEmailAddress?.emailAddress ?? "",
      createdAt: moment().format("DD/MM/yyyy"),
    });
    console.log(result);
  };

  return (
    <div className="p-10">
      <Link href={"/dashboard"}>
        <Button className="">
          {" "}
          <ArrowLeft /> Back
        </Button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 py-5">
        {/* formsection */}
        <FormSection
          loading={loading}
          Userforminput={(v: any) => GenrateAIcontent(v)}
          selectedtemplate={selectedtemplate}
        />

        {/* rich text editor section */}
        <div className="col-span-2">
          <RichTextedior aioutput={aioutput} />
        </div>
      </div>
    </div>
  );
};

export default CreateNewContent;
