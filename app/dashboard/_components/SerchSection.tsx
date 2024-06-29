import { SearchCheck } from "lucide-react";
import React from "react";

const SerchSection = ({ onSerchInput }: any) => {
  return (
    <div className="p-5 md:p-10 bg-gradient-to-br from-purple-500 via-purple-700 to-blue-600 flex flex-col justify-center items-center text-white">
      <h2 className="text-4xl lg:text-4xl font-bold mb-2">
        Browse all templates
      </h2>
      <p className="text-sm lg:text-base mb-4">
        What would you like to generate today?
      </p>
      <div className="w-full flex justify-center">
        <div className="flex gap-2 items-center p-2 bg-white rounded-md my-2 md:my-5 w-full md:w-[50%] max-w-[300px]">
          <SearchCheck className="text-primary" />
          <input
            type="text"
            placeholder="Search for a template"
            className="bg-white/10 outline-none border-none rounded-md p-2 text-black w-full"
            onChange={(e) => onSerchInput(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default SerchSection;
