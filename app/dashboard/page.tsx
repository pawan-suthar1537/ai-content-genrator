import React from "react";
import SerchSection from "./_components/SerchSection";
import TemplateList from "./_components/TemplateList";

const Dashboard = () => {
  return (
    <div>
      {/* serch section */}
      <SerchSection />

      {/* template listing section */}
      <TemplateList />
    </div>
  );
};

export default Dashboard;
