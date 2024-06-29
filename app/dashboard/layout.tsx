"use client";
import React, { useState } from "react";
import Sidenav from "./_components/Sidenav";
import Header from "./_components/Header";
import { Totalusagecontect } from "../(context)/usagecontext";
import { UserSubcriptionUsage } from "../(context)/UserSubcriptionusage";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [totaluse, settotaluse] = useState<Number>(0);
  const [UserSubcription, setUserSubcription] = useState<boolean>(false);
  return (
    <Totalusagecontect.Provider value={{ totaluse, settotaluse }}>
      <UserSubcriptionUsage.Provider
        value={{ UserSubcription, setUserSubcription }}
      >
        <div>
          <div className="md:w-64 hidden md:block fixed">
            <Sidenav />
          </div>

          <div className="md:ml-64">
            <Header />
            {children}
          </div>
        </div>
      </UserSubcriptionUsage.Provider>
    </Totalusagecontect.Provider>
  );
};

export default layout;
