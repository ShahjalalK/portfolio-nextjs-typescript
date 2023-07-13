import React from "react";

type Props = {};

const ClientMessage = (props: Props) => {
  return (
    <div className=" flex justify-end items-end flex-col space-y-1 ">
      <div className="whitespace-normal text-sm bg-primary/20 p-2 rounded-l-md rounded-tr-md mr-5 font-normal">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque unde,
        molestias odio nihil nulla excepturi tempore tenetur voluptates magnam
        fugit!
      </div>
      <div className="w-6 h-6 rounded-full border border-primary/20 relative select-none t-10">
        <span className="text-xs absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-primary/80">
          Me
        </span>
      </div>
    </div>
  );
};

export default ClientMessage;
