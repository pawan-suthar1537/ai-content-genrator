import React, { useRef } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";

import { Editor } from "@toast-ui/react-editor";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

const RichTextedior = () => {
  const editorref: any = useRef();
  return (
    <div className="bg-white shadow-lg border rounded-lg">
      <div className="flex justify-between items-center p-5">
        <h2 className="font-medium text-lg">Your Result</h2>
        <Button>
          <Copy />
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
