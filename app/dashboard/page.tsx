"use client";
import React, { useState } from "react";
import SerchSection from "./_components/SerchSection";
import TemplateList from "./_components/TemplateList";

const Dashboard = () => {
  const [serchinput, setserchinput] = useState<String>();
  return (
    <div>
      {/* serch section */}
      <SerchSection onSerchInput={(value: string) => setserchinput(value)} />

      {/* template listing section */}
      <TemplateList serchinput={serchinput} />
    </div>
  );
};

export default Dashboard;
