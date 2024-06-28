"use client";
import { Totalusagecontect } from "@/app/(context)/usagecontext";
import { Button } from "@/components/ui/button";
import { db } from "@/utils/DB";
import { AIOutput } from "@/utils/Schema";
import { useUser } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import React, { useContext, useEffect, useState } from "react";

const Usagetrack = () => {
  const { user } = useUser();
  //   console.log(user);
  const { totaluse, settotaluse } = useContext(Totalusagecontect);

  useEffect(() => {
    user && getdata();
  }, [user]);

  const getdata = async () => {
    if (!user) return;

    try {
      const res = await db
        .select()
        .from(AIOutput)
        .where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress));

      calculateTotal(res);
      console.log("res", res);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const calculateTotal = (res: any) => {
    let total: number = 0;
    res.forEach((ele: any) => {
      total += ele.aires ? ele.aires.length : 0;
    });
    settotaluse(total); // Update the state with the calculated total
    console.log("------->>>", total);
  };

  return (
    <div className="m-5">
      <div className="bg-primary text-white p-3 rounded-lg">
        <h2 className="font-medium">Credits</h2>
        <div className="h-2 bg-[#9981f9] w-full rounded-full mt-3">
          <div
            className="h-2 bg-white rounded-full"
            style={{
              width: `${(totaluse / 10000) * 100}%`, // Adjust based on your total possible credits
            }}
          ></div>
        </div>
        <h2 className="text-sm my-1 ">{totaluse} / 10,000 credit used</h2>
      </div>
      <Button className="w-full my-3 text-primary" variant={"secondary"}>
        Upgrade
      </Button>
    </div>
  );
};

export default Usagetrack;
