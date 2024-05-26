import Sidebar from "@/components/Sidebar";
import Card from "@/components/card";
import React, { Fragment } from "react";

const Page = () => {
  return (
    <>
      <div className="flex flex-row gap-40 ">
        <Sidebar />
        <div className="grid grid-cols-5 w-full gap-16 mr-[18px] mt-20">
          {Array(55)
            .fill(10)
            .map((i) => {
              return (
                <Fragment key={i}>
                  <Card keyProp={i} />{" "}
                </Fragment>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Page;
