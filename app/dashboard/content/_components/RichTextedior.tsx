import React, { useEffect, useRef } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";

import { Editor } from "@toast-ui/react-editor";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

interface Props {
  aioutput: string;
}

const RichTextedior = ({ aioutput }: Props) => {
  const editorref: any = useRef();

  useEffect(() => {
    const editorinstance = editorref.current.getInstance();
    editorinstance.setMarkdown(aioutput);
    
  }, [aioutput])
  
  return (
    <div className="bg-white shadow-lg border rounded-lg">
      <div className="flex justify-between items-center p-5">
        <h2 className="font-medium text-lg">Your Result</h2>
        <Button className="gap-2">
          <Copy className="h-4 w-4" />
          Copy
        </Button>
      </div>
      <Editor
        ref={editorref}
        initialValue="Your Result will appear here."
        height="600px"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        onChange={() =>
          console.log(editorref.current.getInstance().getMarkdown())
        }
      />
    </div>
  );
};

export default RichTextedior;
