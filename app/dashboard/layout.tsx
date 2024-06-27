import React from "react";
import Sidenav from "./_components/Sidenav";
import Header from "./_components/Header";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <div className="md:w-64 hidden md:block fixed">
        <Sidenav />
      </div>
      <div className="md:ml-64">{children}</div>
    </div>
  );
};

export default layout;
