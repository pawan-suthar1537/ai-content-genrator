import { SearchIcon } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <div className="p-5 shadow-sm border-b-2 flex justify-between items-center">
      <div className="flex gap-2 items-center p-2 border rounded-md max-w-lg">
        <SearchIcon />
        <input type="text" placeholder="search" className="outline-none" />
      </div>
      {/* message */}
      <div>
        <h2 className="bg-primary p-1 rounded-full text-sm text-white px-2">
          Join membership program just for $10/month and get access to all
        </h2>
      </div>
    </div>
  );
};

export default Header;
