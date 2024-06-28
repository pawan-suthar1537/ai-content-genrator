"use client";
import React, { useState } from "react";
import Sidenav from "./_components/Sidenav";
import Header from "./_components/Header";
import { Totalusagecontect } from "../(context)/usagecontext";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [totaluse, settotaluse] = useState<Number>(0);
  return (
    <Totalusagecontect.Provider value={{ totaluse, settotaluse }}>
      <div>
        <div className="md:w-64 hidden md:block fixed">
          <Sidenav />
        </div>

        <div className="md:ml-64">
          <Header />
          {children}
        </div>
      </div>
    </Totalusagecontect.Provider>
  );
};

export default layout;
