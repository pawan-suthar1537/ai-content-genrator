import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sidenav = () => {
  return (
    <div className="h-screen p-5 shadow-sm border">
      <Link href="/">
        <div className="flex justify-center border-b-2  py-2">
          <Image
            src="/logo.svg"
            alt="logo"
            width={120}
            height={100}
            unoptimized
          />
        </div>
      </Link>
    </div>
  );
};

export default Sidenav;
