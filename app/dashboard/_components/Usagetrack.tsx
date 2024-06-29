"use client";
import { UserSubcriptionUsage } from "@/app/(context)/UserSubcriptionusage";
import { Totalusagecontect } from "@/app/(context)/usagecontext";
import { Button } from "@/components/ui/button";
import { db } from "@/utils/DB";
import { AIOutput, Usersubcription } from "@/utils/Schema";
import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import Link from "next/link";
import { Result } from "postcss";
import React, { useContext, useEffect, useState } from "react";

const Usagetrack = () => {
  const { user } = useUser();
  const { totaluse, settotaluse } = useContext(Totalusagecontect);
  const { UserSubcription, setUserSubcription } =
    useContext(UserSubcriptionUsage);

  const [max, setmax] = useState<number>(10000);

  useEffect(() => {
    user && getdata();
    user && Isusersub();
  }, [user]);

  const getdata = async () => {
    if (!user?.primaryEmailAddress?.emailAddress) {
      console.error("User email is required");
      return;
    }

    try {
      const emailAddress = user.primaryEmailAddress.emailAddress;
      const res = await db
        .select()
        .from(AIOutput)
        .where(eq(AIOutput.createdBy, emailAddress));

      calculateTotal(res);
      console.log("res", res);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const Isusersub = async () => {
    try {
      if (!user?.primaryEmailAddress?.emailAddress) {
        console.error("User email is required");
        return;
      }
      const result = await db
        .select()
        .from(Usersubcription)
        .where(
          eq(Usersubcription.email, user?.primaryEmailAddress?.emailAddress)
        );

      if (result && result.length > 0) {
        setUserSubcription(true);
        setmax(100000);
      } else {
        setUserSubcription(false);
      }
    } catch (error) {
      console.error("Error checking user subscription:", error);
      setUserSubcription(false);
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
              width: `${(totaluse / max) * 100}%`, // Adjust based on your total possible credits
            }}
          ></div>
        </div>
        <h2 className="text-sm my-1 ">
          {totaluse} / {max} Used
        </h2>
      </div>
      <Link href={"/dashboard/billing"}>
        <Button className="w-full my-3 text-primary" variant={"secondary"}>
          Upgrade
        </Button>
      </Link>
    </div>
  );
};

export default Usagetrack;
