import { FileClock, Home, Settings2, WalletIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sidenav = () => {
  const MENULIST = [
    {
      name: "Home",
      icon: Home,
      href: "/dashboard",
    },
    {
      name: "History",
      icon: FileClock,
      href: "/dashboard/history",
    },
    {
      name: "Billing",
      icon: WalletIcon,
      href: "/dashboard/billing",
    },
    {
      name: "Setting",
      icon: Settings2,
      href: "/dashboard/setting",
    },
  ];

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
      <div className="mt-5">
        {MENULIST.map((item, index) => (
          <div className="flex gap-2 p-3 mb-3 rounded-lg hover:bg-primary hover:text-white cursor-pointer">
            <item.icon />
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidenav;
